#!/bin/bash
# run this file with `source voila-setup.sh`
cd voila-gridstack
yes | conda create voila-gridstack
conda activate voila-gridstack
yes | mamba install -c conda-forge jupyterlab
pip install -e .
jupyter labextension develop . --overwrite
jlpm run build
