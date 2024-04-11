import argparse
import json
from jinja2 import Environment, FileSystemLoader

# Parse command-line arguments
parser = argparse.ArgumentParser(description='Generate HTML from a template.')
parser.add_argument('--example', action='store_true',
                    help='Use example assets for questions and results.')
args = parser.parse_args()

# Determine the assets path based on the --example flag
assets_path = 'example/assets' if args.example else 'assets'

# Adjusted to dynamically build the path to config.json
config_path = f'config.json'

# Load configuration from the chosen directory
with open(config_path) as config_file:
    config = json.load(config_file)

# Update config with the dynamic path for questions and results
config['questions_js'] = f'{assets_path}/questions/questions.js'
config['results_js'] = f'{assets_path}/results/results.js'

# Set up Jinja2 environment and load the template
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('template.html')

# Generate the HTML output
html_output = template.render(config)

# Write the generated HTML to a file
with open('index.html', 'w') as output_file:
    output_file.write(html_output)