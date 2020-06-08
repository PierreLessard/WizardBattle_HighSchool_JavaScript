const rightwiz1_src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAKa0lEQVR4XuVdwYodVRB9IegiIG4SMwhuBHeDkL0L/0BciP6BCOoH+AF+gAqifyAuxD9w4V6Q2QluBMmY2YiQhRIi9fSMx0rVrarb93ZPerLJvPf69albp6ruvd2nXt84qH937959rN87Pz+/od+b+fo62fCEYzH4t+7cufTx1w8e/M/fswm5TjaYkW054MEzPx9J+O7X5y7JmEnEdbHBLS3iAGQBnH/nr5cP/DcyQ4iwyganTQ9Z18GGJgHiwNdf/OPoR+18eU/I4IwQwpgg65gKESB1zzY0J9coAkEMHI2IF7LwHv6W15wx2Ul8rzYgEEMCoixg58PZetJeUooyWfA025AmwKv/2UiulB4+JxOwRxtCAqT+8sC55sNRH735QpOHj7/57bCEgD3b0JyEefLTZSVyOjPSS4BE/95tcPcB1sAtp3/4+Y9HX3/y3quXPtfv9RDgOd+z4eTk5MCfiQ383lW1obkRy5QYPVD5zqjBcxa1Mu5ptqFJADZYlXJjTQa90Sfn2rsN4UU2KQUtAn76/r9rd6+8Zp+OCXh8OFx+4cbhEOILCaNtyK7c9GpshB/un58fPjg9PXx6dnY8feiAaPBsJJMh74OQ2QRUbXj/9PSxOCAbAJkgyNrAFzn/vH9/LAFeZK1JQGSDZCAi8N3btw9fXlyEQVglIGODYKczoCdl9XewD3j73q1jCfrqh4epgWPwo2wQAjB4OWeFgFE2yHnED+KD0AlSgt549MjE/v2lh8f3n//lVtO2b2/evNyIAbgymBk29ATBDD+kCXj25OToM6lb/E9IYAJwHB8LAnqiHxmAwVt2tGyAHToIlhCw1AYOwjQBrYiVwYmDPJKYgErpAWYrA3AMbJDXYocOlJFB4PmCbbCOsfxQIkBOgH+cjgzMx7ARsrPucb7OgCU2yDzUUwJn2lAigB3K0R4xj7liBAFXwQbOMC65cr3MmyfEbvGTDsQ0ARYop7lFgnwHd8h6nc/Rp0ucfq1tYOcstQNl0CuzVilEOcRnlg1dBHj1zZoHlka/JkDXdrbFmwe2tAGLAM+GFAHYvcngvaWnlQFYnfAKpLL85En4KtjA5SXrBz7O8kOaAHa+OEYvPbn+ARTHLSFAr4CsgUtZ0PWXbZCbSL03hPQELK+1DShLPT5IEQDmvcGLUT3gmWyICLAGr500KgAwD7IfluKXCNAOy66ERjnAIgxOaa3ERuG3JuBe/PCesAy6tbTyNkKYfLD86ikBuCGPyb0yAcMu+U4vARqfx6SDQS8AsuNv3pBpbf9bqw9taNUBPHBeynkEWMtPvUSuBMASfCtLWuO/JEBLC1vO93a7rZqecQDbwFmnLy3MwPfG7y25M/MXH+ON/0hApOusglnHtwjYEn8NbPFHkwDPwZZxmUgeQZgXGGvhrzX21CS8Va+AJVFfq1dhLezUMlSikUlYs1fAcsRa+GtghwSgFGzZKxAppEU6OatXYTZ2mgAhYiudfkYhPatXYTZ2ioBMFsgx3BeAibjVK1CZUKNInIk/E7tEQJQF8rnukBnVK5CJxFn4M7G7CNhCp89OWBt/JnaJgC11+uKErfBnYqcIgAGos2v3CmyJPxs7JMAzYC2d/pb4a2CnCOBLC5FOX44d2ayhLwmsiV/F7mkSSROwlU4fTtgCfw3skACOfjFohEZedtUiD6+ok7EX2Qp/1NglkCCPl/EPJYDJavUKzCKggo8bNhV1dLZTKOqTEAKAP40A75K09AoIAWLAFxcX05okRuNHGZC5BI8+CSFAjv+3SSTz1X+OGXXzolejOQpf7rb1kJ/3lH8k90mk+gP0HDBKI98jkhUCRuDjomJFLsnYlvo60ythKbTLJUg7gI2p9gpUHIAMrPQJyHd0v0KvVF6Tr2++V8cutg3JAE8gC2IsB/REoCbAS/JIqT2KAOBzAFawFxOwRKff2yvAUbgUHw7I1vVR2Jj/FhPAhmcVcvKdJUplaw6IJOocqfK3XMfqCYDW/AMMLwNYvacXIF1zQLZXgMuPGAmBb7X2Y4B6IsT7VjuSlsprXWfVhgz5Yo+QgGW2LlMsGAb+YgKsFLZ0+hZ4Nv09AtjxPAkC31ogVFV6LfIZn6NcE8AZUu6Q0ctQT6fP0e5JxUXS3usAaxJmUuVzSOZ1KRghVdcZoBXSIIPJ56z3xp7OANwXBZDuAViikc9kglUCtA0oAVYjhXzW2yfgOV/OKXfntPN5rkNgeIGXIqA1eGHW08izIUsGL+dpaUWjSRDEVEQAVunhQNEbL69DKCI+JCAz+1uRx8aOLDtyXk+B7O2SR+G3Np0eAVHZTUkTMzJ1Sx+PGtjjAL7uYznWUkzzyodXSD34mHOQfdblBx1kXh9DSp7OKYe/ddrzoCxwfk/vDaL0ty60aeJBqJ4zsuvvaK7RNmTKHme/R1JIQGvwltGj9fmR8611fuRM/XlVHh81XI/CD3/zuQrkHe85YNQl5sjOq4rfbFHiQUUlJHJA9nOLkD1jNwnYoi8ABFwXbHcVZDliT7p8LyPXHne4DN2qLwA7b3HU2s8vWBM7JEAcsEVfACJx79ipnXArC4SgWX0BUSTuATtFQJQFukzI6xF9AZkseNqxSwTsSZcfLYuZ/JnjThGwR11+hoA1xh1Owlv9fr9E4HXAbu4DKs8Q6JFmt9biFWw5zyhJvEf8rGcnhBsxOCnS5Y8mgMnZM3ZIwF51+dFOeK1xh5OwGCppOUKXj4tqrI+P5OGjsWU8WfwZ2Bp/CAEcTZE2HgZk9fmRE6rYFfwZ2MCX/1PPD8hkQLSkk8/5GQJKHx+uxLKNEZ4d+hEqwJfjPzs7a5bh0diCiWcYlAjIODk6hq/rixPkIlukUBt1w8a6pxBJ5GdiCwnv3LuVa1FiZURGG28dY90XjRyA7GvdHqzo8nWARPiRImQpttiTngP4jr+WnGttvJUJmoDsswQy5FsPkNCy8d4MyPZDsAghEiTw2EsEtEqMpcfk4y0CovKDDNAPvtF2tCQxcqyXffJZywadAS09kg5K2BhlfpmASJcvhnhXQjkKo/THANgJETacbQWKxo6cr8vfLOwSAS1xUiUDsuUnMwfA6ZGMZCn53PET/Wy/lfkYsya+iwAr3TxxFKciru9kok9ngNWTgLW0JYeXz1izyo0R1ezT9T1DAL6D26nemEsEYFDWL9hqAqzOlZ7eMJSgrBM4UkEiOwHvZecfq9ED58DPIlsKQlaRt7C6CMCAoIzWhlgi1t7WJL0KYmzOLpYx8uC1OLZS/qwSaC09M9nf9cOt2gCrJ2CJNr61qrJKkLxnEaDngVnPL7D6EawgqOCHGaCXYrzm1+tdPRGOeIIG47c2PhyFlna/V123BF/IWSRPz65COAKzu+BM9Pfg47zRZqiKb0W/F4B6Yxqqoz1jcC3E0r1bk6zeLXN56onAFj6vcuRv6xFSCIYR/QHaR3olaC1CMuN/ogTxBShLH9/aDXL0jfz9fnZ2ZgWmV2tVAph4TXSE7y3Rw0lYX/nTyy8e1Oj+AJQajrLWNZgZ+NqGtZ5fsHl/gOX8bH2uHBeVwFGXnj2bPPy/AfOr2TuHqK95AAAAAElFTkSuQmCC';
const leftwiz1_src = 'data:image/png;base64,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';
const rightwiz2_src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAG3UlEQVR4Xu2dPY8URxCG934AkgNbt3IKljNLEDixAwIyCwkJRxA5gpCQDBE7cWLpHDmCyJaQTpYTBw4gcWAkZ5ZNiu4EAeh+wKLqux5q+nq63urpmmFr9qLd2d6tqvfpz92qm73V+b9N5tpe5prlpcX4kBM2BH/x1vNO4BePL6diWwNZjA9DQp4T4IdvHgYI128/4TAsQSzCh5KAmzgKovj3fnuw4o/ZyKDPyU0bY2G596EIgNQ7fHQjiJiKT9cIBh8RBIwDyrVZrVaaUROgevZBEqPYAyOYKHTs7gQrXouP6XkyYtBF3LUPIgCpB3Lxo9iZRXvMVCSOgm32AQZQmP/RnizZGvqcDoBHHyRRNjT/8sCTXVAQbfPfL0UIe599S69LtgYBePahuAjzxS+dViTRe3NOPYDQAeJa49GHwXNALvCs6Jdunmr9/6/vNU+uVY6ArPjefCgexKKixd5+6eZqvV6vjp7+2APAr9UC4KPIqw8SgHDA0kw3uYl8JADXPiALYxHAm6f/dJp/9PUX2YWUA7h463l3Yn7x+DJiP6zzpU6wzT4gAsAjgAtBqkUgOQDrP/9aPXt5B7EvAuDUt8kH0gARAAYwtI9MAZBh+rMAsG0+QAD29/fRw1a23fHxcXcOOHx0I0xB128/QWx3+wCPPpAGiAibjy/czQr788FRuP7d3XUR0OuTgx4ApfhhCvLqAwzg8wunP8r8e/L+hxp6ThA4gNiOt40AKnt/B8CjDzCAUhcngamHDgnEAVT0/uIIiH5tqw8qAGdChpj5lBCDp+u8DYdGJ+tK8XsAvPmgAsAF5b2dA8iNlLhWtADgzQcYAAke5//cVJODQO3uf/970Gys+DPa761BrTWoApDr5UNzcKvezwFMbD8LoJUPEICvPv2p2wG9+vtaePzJlT96PuRGALWldnwbWtyv5l/czGw/ALDyAQZAQy+KnwKg3vns5Z1uYU7btQDg1T4EIO54cr0/rgeWADzbVwFIZwh0JzR2BAydgj3YlwCE722GBOBA+BqQ7pJGAHBvv/iDTBR+6ISbnkLp+dAWVfmjfE94z/Y5gF5qYUn8odOusMOBRlv8jKXYj6JIeZ0Vu8dzbylmYLQwMKIDzBa/VhSpF7fWcc46gUlsiwAWXCcwSY2C1KMXkaNfGLbm8UsAwjF84XUCpvFDAIiC5xx9YeESs7PH1EkgAMRRQA14TUAMyFGdgFmNAgxAGgX0elod46hOQBwFtfGrAXjM0Qf2zmY1CjAAzzn6CACr+BEA7nP0pUXYskZBArCIHP3SOcC6TkIEwJ3zmqMvHcTi6xbxowCoXdMkXWDe7eI+ezCHD/H7IDPbEoDeAGiVo19ZIxDOIy18SL7fQjVoYpt+F+Hxo8bF4DkpKUc/OqCsEWjmAwF4e3ia6fH65ADVAJ4BNPGjxlXBD00vsU5gCgAlH+IIIAgWADTxqwC0ztGvyJbbzOiDiW0VAK85+uCGwKRGQQ3AY46+BkDr+NUASs5ua46+BkDr+KsAeMvR1wJoGX8VAO4wmp1G72mVKZ0KNpEP2TVgrG0UQDDuNUcfGAFm8VcDyDltWCMQziFpJ5jQBzPbMACr/Hig93XfCc3ow6LrA0LvJ/FnqhEwtY2MgG7x2dUHnK8OGlsfoQJQu/sYkZ7ezf25qQrdgXzI9iUA7vPzhTXIPP4hAIvJzx8AMFn8HMCuPoDRmKo+IQKYLT/+LObF2i9OQcnwlNYLxZa+2HSSvPzS1DNl3EUAM9UGTJKXXwIwZdylXm2eG18YB4uxLU0rprnx0hZwxrqEyeIWAZBIM9UGiBnJY/LyJfhTxS0BCCfRUk+kBoa1Ae5tQwCk3kCvG9UGiKNg222rAMxQG2CWlw/smSexDQGwyo1HRPBuWwIwZ23AImwXzwHWufGlc8BSbIsHse73wNJtStrfQ6D3dYRFXr50CJwqbgQAtYEzg4cCU95DwDwvHwAwSdzSGtB1hBZ5+fF/BinrA5rl5VMw3DY9F+5hYG67CQDem6TceC4CWB8Ajz6NbfIDsG9uuzkAZAqiXqi4hwAsgsb20dUvmwKotQ0DaJ2XTw6D9QHN8/Lj1yfALVTMbcMAZqwNMMnLBw6B4Xsw67hVAFrnxmtE8GpbBaAkmGFtwGAvjP5ss201gJa58ZoRQG092lYD4KKhmWn0nhG1ASZ5+Vr4VnEjAMxy4wER3NuuApATzqg2wCwvvwa+RdwQAI95+QCAsA21jh0GMFNufieCV/sQAM//vx8YCab1ESoAqbPoLuhDzs/XALCIXwJgnh8vCODefjE3dHf/gNN7aFrev4AD2NUHsOG4qw8AJmdlE+TnV+VHqppn7b8DGFEWX9TspLsAAAAASUVORK5CYII=';
const leftwiz2_src = 'data:image/png;base64,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';
const fireball_src = 'data:image/png;base64,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';
const ice_src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABGklEQVRYR+1Vyw3CMAxNz1WnYQs2YAMGYIwOwAZswJkFmAb1XORQG/flZ5VDheSc0sTxe3l+Truw8+h2xg9OwBVwBf5agRnekE2X2XIoAvenp+BPtwO+Z+a85sAF4Qt+ea1BxyF+KzKm3LUglDj0z0cWNC4SoYWEItIkUQqYtcQCQBMFQp/38xSO1/5DAMc4NBXRBOTGAl6QmUD1iARw8Nm0NBQpuDSpA2du3PqDCiEgwee0aYVA69Ysdwuc9xMSqnxIgLZSFdhYnFEpgSVIQHkhowB2CZowdT73u/YDlGVl0owRa+3ZbBNWp1iijEIAyBFZLAsBTlBWZ4mAF9GU2xRUMF5CSLeX1ay/ELBiVOOcgCvgCrgCuyvwBpaqXB98nOzfAAAAAElFTkSuQmCC';
const poison_src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABzklEQVRYR72XsUoEQQyGb30C7Q49BBG2EAR7QVAsrSwEbS19AsHWd7gHEcTORxAOLBZsROU6fQJXMpghm8kkmXO8K467nd35v/xJZmeaUfmnNx5pSqb03hxFt0/W1Plf7j7puDm/dUMQRtHx7qoqPp99DcYJTFZHAwji+9dbJY7GexHGgsgB9BC1FbFFRh35BUn0JABRfGM8UfXe52/iuAXBARJxS5irSiAaBAVIck7F27YVI+y6LrmuQfCaGADQggPxnGguFxTGARG0EaD/qzhClUIkAItEzh3RIFh7NgOAGuKWExJAtH8ZAABIIcCBCHB4cGStLUXjmApekCJAzehL0hAdkKJf/5Z7/2Ml7X2rNakLogMcICeOQl4IKQ0mgCVeAlEMgOI7m3uJq8+vT8k1y4kiAE0clUshPAAwd39zfzkCAClyHjaH0FzgANmVEACOJ2fuPqcQFkCuA+BdNFiKby+mVQEs+ylASMPj7OFfAbj99HUcAODLA+Gx38h91E62ZFYteMRhdgDA3Hu3ZGh/6AipIGuL8xTQ/Me2lIrCW/XWjlgDiGuDuyozti96MInpgB9wSDm/OhVZaLHVPpoNUoJ/ln04laKuejz/AahVmig2tVFPAAAAAElFTkSuQmCC';