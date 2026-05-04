import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the DOCTYPE up to <body>
import re
content = re.sub(r'<\s*!DOCTYPE html\s*>.*?<body>', '<>', content, flags=re.DOTALL)

# Replace the closing body and html tags
content = content.replace('</body>', '')
content = content.replace('</html>', '</>')

# HTML comments to JSX comments
content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)

# Self-closing <hr> tags
content = content.replace('<hr className="section-divider">', '<hr className="section-divider" />')

# Self-closing <img> tags
content = re.sub(r'(<img\s+[^>]*?)(?<!/)>', r'\1 />', content)

# class= to className=
content = content.replace('class="', 'className="')

# Inline styles
content = content.replace(
    'style="max-width: 600px; margin-top: 1rem; font-size: 1.1rem; color: var(--text-muted); line-height: 1.6;"',
    'style={{ maxWidth: "600px", marginTop: "1rem", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}'
)
content = content.replace(
    'style="display: flex; flex-direction: column; align-items: center;"',
    'style={{ display: "flex", flexDirection: "column", alignItems: "center" }}'
)
content = content.replace(
    'style="display: none;"',
    'style={{ display: "none" }}'
)

# SVG attributes
content = content.replace('stroke-width', 'strokeWidth')
content = content.replace('stroke-linecap', 'strokeLinecap')
content = content.replace('stroke-linejoin', 'strokeLinejoin')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
