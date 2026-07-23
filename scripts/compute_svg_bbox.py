#!/usr/bin/env python3
"""Compute the tight bounding box of visible artwork in an SVG file — zero padding."""

import re
import sys
import xml.etree.ElementTree as ET


def parse_path_d(d: str):
    """Parse an SVG path 'd' attribute and yield (x, y) coordinate pairs."""
    tokens = re.findall(
        r'[MmZzLlHhVvCcSsQqTtAa]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?', d
    )
    cx, cy = 0.0, 0.0
    cmd = None
    i = 0
    while i < len(tokens):
        tok = tokens[i]
        if re.match(r'[MmZzLlHhVvCcSsQqTtAa]', tok):
            cmd = tok
            i += 1
            continue
        if cmd in ('M', 'm'):
            x, y = float(tok), float(tokens[i + 1])
            if cmd == 'm':
                x += cx; y += cy
            cx, cy = x, y
            yield (x, y)
            i += 2
            cmd = 'L' if cmd == 'M' else 'l'
        elif cmd in ('L', 'l'):
            x, y = float(tok), float(tokens[i + 1])
            if cmd == 'l':
                x += cx; y += cy
            cx, cy = x, y
            yield (x, y)
            i += 2
        elif cmd in ('H', 'h'):
            x = float(tok)
            if cmd == 'h':
                x += cx
            cx = x
            yield (cx, cy)
            i += 1
        elif cmd in ('V', 'v'):
            y = float(tok)
            if cmd == 'v':
                y += cy
            cy = y
            yield (cx, cy)
            i += 1
        elif cmd in ('C', 'c'):
            x1, y1 = float(tok), float(tokens[i + 1])
            x2, y2 = float(tokens[i + 2]), float(tokens[i + 3])
            x, y = float(tokens[i + 4]), float(tokens[i + 5])
            if cmd == 'c':
                x1 += cx; y1 += cy; x2 += cx; y2 += cy; x += cx; y += cy
            yield (x1, y1); yield (x2, y2)
            cx, cy = x, y
            yield (x, y)
            i += 6
        elif cmd in ('S', 's'):
            x2, y2 = float(tok), float(tokens[i + 1])
            x, y = float(tokens[i + 2]), float(tokens[i + 3])
            if cmd == 's':
                x2 += cx; y2 += cy; x += cx; y += cy
            yield (x2, y2)
            cx, cy = x, y
            yield (x, y)
            i += 4
        elif cmd in ('Q', 'q'):
            x1, y1 = float(tok), float(tokens[i + 1])
            x, y = float(tokens[i + 2]), float(tokens[i + 3])
            if cmd == 'q':
                x1 += cx; y1 += cy; x += cx; y += cy
            yield (x1, y1)
            cx, cy = x, y
            yield (x, y)
            i += 4
        elif cmd in ('T', 't'):
            x, y = float(tok), float(tokens[i + 1])
            if cmd == 't':
                x += cx; y += cy
            cx, cy = x, y
            yield (x, y)
            i += 2
        elif cmd in ('A', 'a'):
            x, y = float(tokens[i + 5]), float(tokens[i + 6])
            if cmd == 'a':
                x += cx; y += cy
            yield (x, y)
            cx, cy = x, y
            i += 7
        elif cmd in ('Z', 'z'):
            i += 1
        else:
            i += 1


def compute_path_bbox(d: str):
    xs, ys = [], []
    for x, y in parse_path_d(d):
        xs.append(x); ys.append(y)
    if not xs:
        return None
    return (min(xs), min(ys), max(xs), max(ys))


def compute_svg_bbox(svg_path: str):
    tree = ET.parse(svg_path)
    root = tree.getroot()
    ns = {'svg': 'http://www.w3.org/2000/svg'}

    overall = None

    for path in root.findall('.//svg:path', ns) or root.findall('.//path'):
        d = path.get('d', '')
        if d:
            bb = compute_path_bbox(d)
            if bb:
                overall = bb if overall is None else (
                    min(overall[0], bb[0]), min(overall[1], bb[1]),
                    max(overall[2], bb[2]), max(overall[3], bb[3]),
                )

    # Text element — estimate from font metrics
    for text in root.findall('.//svg:text', ns) or root.findall('.//text'):
        transform = text.get('transform', '')
        m = re.search(r'translate\(([-\d.]+)\s*,\s*([-\d.]+)\)', transform)
        tx, ty = (float(m.group(1)), float(m.group(2))) if m else (0, 0)
        x_attr = float(text.get('x', '0'))
        y_attr = float(text.get('y', '0'))
        style = text.get('style', '')
        fs_match = re.search(r'font-size:\s*([-\d.]+)', style)
        font_size = float(fs_match.group(1)) if fs_match else 31.93
        for tspan in text.findall('.//svg:tspan', ns) or text.findall('.//tspan'):
            text_content = tspan.text or ''
            char_width = font_size * 0.55
            text_width = len(text_content) * char_width
            text_height = font_size * 1.2
            text_x = tx + x_attr
            text_y = ty + y_attr
            bb = (text_x, text_y - text_height, text_x + text_width, text_y + font_size * 0.3)
            overall = bb if overall is None else (
                min(overall[0], bb[0]), min(overall[1], bb[1]),
                max(overall[2], bb[2]), max(overall[3], bb[3]),
            )

    return overall


if __name__ == '__main__':
    for svg_file in sys.argv[1:]:
        print(f"\n{'=' * 60}")
        print(f"File: {svg_file}")
        print(f"{'=' * 60}")

        tree = ET.parse(svg_file)
        root = tree.getroot()
        old_vb = root.get('viewBox', '(none)')
        old_w = root.get('width', '(none)')
        old_h = root.get('height', '(none)')
        print(f"  OLD viewBox:  {old_vb}")
        print(f"  OLD width:    {old_w}")
        print(f"  OLD height:   {old_h}")

        bb = compute_svg_bbox(svg_file)
        if bb:
            min_x, min_y, max_x, max_y = bb
            w = max_x - min_x
            h = max_y - min_y
            print(f"  Artwork bbox: minX={min_x:.2f}  minY={min_y:.2f}  maxX={max_x:.2f}  maxY={max_y:.2f}")
            print(f"  Artwork size: {w:.2f} x {h:.2f}")
            print(f"  NEW viewBox:  {min_x:.2f} {min_y:.2f} {w:.2f} {h:.2f}")
            print(f"  NEW width:    {w:.2f}")
            print(f"  NEW height:   {h:.2f}")
        else:
            print("  ERROR: could not compute bbox")
