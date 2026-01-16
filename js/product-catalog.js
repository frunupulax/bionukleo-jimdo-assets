
window.ProductCatalog = (function() {
    const products = [
        { 
            id: 'E-DH-0001', 
            name: 'Glucose-6-phosphate dehydrogenase DH01', 
            categories: ['enzyme', 'redox'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 80°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m2d54d91058a095a7' 
        },
        { 
            id: 'E-NP-1001', 
            name: 'Pyrimidine nucleoside phosphorylase Y01', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 50°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma4e7faf9db43ce30' 
        },
        { 
            id: 'E-NP-1002', 
            name: 'Pyrimidine nucleoside phosphorylase Y02', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €115.00', 
            description: 'Bacterial origin, thermostable up to 60°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m81cecf8e409cea87' 
        },
        { 
            id: 'E-NP-1003', 
            name: 'Pyrimidine nucleoside phosphorylase Y03', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 60°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma38759cbfb4ede17' 
        },
        { 
            id: 'E-NP-1004', 
            name: 'Pyrimidine nucleoside phosphorylase Y04', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 80°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m5152573d5f3ce384' 
        },
        { 
            id: 'E-NP-1011', 
            name: 'Thymidine phosphorylase Y11', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €140.00', 
            description: '<i>Escherichia coli deoA</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m395d7fce4924f26b' 
        },
        { 
            id: 'E-NP-1012', 
            name: 'Uridine phosphorylase Y12', 
            categories: ['enzyme', 'pento', 'pynp'], 
            price: 'from €140.00', 
            description: '<i>Escherichia coli udp</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m8f8a7cf1c45556f9' 
        },

        { 
            id: 'E-NP-2001', 
            name: 'Purine nucleoside phosphorylase N01', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €120.00', 
            description: 'Bacterial origin, thermostable up to 50 °C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m8614d2e7720ff4e7' 
        },
        { 
            id: 'E-NP-2002', 
            name: 'Purine nucleoside phosphorylase N02', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €115.00', 
            description: 'Bacterial origin, thermostable up to 60°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m01095e3405d29f7e' 
        },
        { 
            id: 'E-NP-2003', 
            name: 'Purine nucleoside phosphorylase N03', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €140.00', 
            description: 'Archaeal origin, thermostable up to 80°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m72a9f5999d258fcd' 
        },
        { 
            id: 'E-NP-2004', 
            name: 'Purine nucleoside phosphorylase N04', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 60°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mb7fcc114e86e19a6' 
        },
        { 
            id: 'E-NP-2005', 
            name: 'Purine nucleoside phosphorylase N05', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €140.00', 
            description: 'Bacterial origin, thermostable up to 60°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mdf32670c78f038c4' 
        },
        { 
            id: 'E-NP-2009', 
            name: 'Xanthosine phosphorylase N09', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €140.00', 
            description: '<i>Escherichia coli xapA</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma6575441ae2bf5b9'
        },

        { 
            id: 'E-NP-2011', 
            name: 'Purine nucleoside phosphorylase N11', 
            categories: ['enzyme', 'pento', 'pnp'], 
            price: 'from €140.00', 
            description: '<i>Escherichia coli deoD</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/me69b42bd280bdcbf' 
        },

        { 
            id: 'E-NT-0002', 
            name: 'Nucleoside deoxyribosyltransferase NdT02', 
            categories: ['enzyme', 'pento', 'otherPento'], 
            price: 'from €180.00', 
            description: 'NdT type II from <i>Lactobacillus leichmannii</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mde6c5545734f1f45' 
        },
        { 
            id: 'E-NT-0003', 
            name: 'Nucleoside deoxyribosyltransferase NdT03', 
            categories: ['enzyme', 'pento', 'otherPento'], 
            price: 'from €180.00', 
            description: 'NdT type II from <i>Limosilactobacillus reuteri</i>, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma2cbb1bd43d364b6' 
        },
        { 
            id: 'E-AM-0001', 
            name: 'AMP phosphorylase AM01', 
            categories: ['enzyme', 'pento', 'otherPento'], 
            price: 'from €440.00', 
            description: '<i>Thermococcus kodakarensis deoA</i>, thermostable up to 80°C',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/me26f67c0dcd19a1f' 
        },
        { 
            id: 'E-SP-0001', 
            name: 'Sucrose phosphorylase SP01', 
            categories: ['enzyme', 'pento', 'otherPento'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, mesophilic',  
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m91b2c34f5bab90b7' 
        },
        
        { 
            id: 'E-KI-0102', 
            name: 'Thymidine kinase NK02', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 50°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m40003a844aa52a2e' 
        },
        { 
            id: 'E-KI-0112', 
            name: 'Deoxynucleoside kinase NK12', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €180.00', 
            description: '<i>Drosophila melanogaster dnk</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/md4cf19c35f7033e2' 
        },
        { 
            id: 'E-KI-0113', 
            name: 'Deoxycytidine kinase NK13', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €180.00', 
            description: 'Human DCK, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mcc7b16dbb331721e' 
        },
        { 
            id: 'E-KI-0114', 
            name: 'Adenosine kinase NK14', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €180.00', 
            description: 'Human ADK, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/me832526ce1b4526e' 
        },
        { 
            id: 'E-KI-0115', 
            name: 'Uridine/cytidine kinase NK15', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €180.00', 
            description: 'Human UCK2 (isoform 1), mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m3d23973ed5f33a46' 
        },
        { 
            id: 'E-KI-0116', 
            name: 'Thymidine kinase NK16', 
            categories: ['enzyme', 'phospho', 'nk'], 
            price: 'from €180.00', 
            description: 'Viral origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m2d01821683368af7' 
        },

        { 
            id: 'E-KI-0201', 
            name: 'Adenylate kinase NMPK01', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m085cfbfb83d5a57c' 
        },
        { 
            id: 'E-KI-0202', 
            name: '(d)CMP kinase NMPK02', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m69c1fb215ba10440' 
        },
        { 
            id: 'E-KI-0203', 
            name: 'Guanylate kinase NMPK03', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/me4401f8fc19e0673' 
        },
        { 
            id: 'E-KI-0204', 
            name: 'TMP kinase NMPK04', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m69716aabe2069933' 
        },
        { 
            id: 'E-KI-0205', 
            name: 'UMP kinase NMPK05', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma059cc4e0d7606e5' 
        },
        { 
            id: 'E-KI-0206', 
            name: 'TMP kinase NMPK06', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €180.00', 
            description: 'Eukaryotic origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m9ace6184479b4883' 
        },
        { 
            id: 'E-KI-0207', 
            name: 'UMP kinase NMPK07', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €180.00', 
            description: 'Eukaryotic origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m70a106181d665325' 
        },
        { 
            id: 'E-KI-0209', 
            name: 'dNMP kinase NMPK09', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €180.00', 
            description: 'Viral origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mc354115bb1a1f3c4' 
        },
        { 
            id: 'E-KI-0210', 
            name: 'Adenylate kinase NMPK10', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €220.00', 
            description: 'Bacterial origin, thermostable up to 60°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m97f3c1e8456f2158' 
        },
        { 
            id: 'E-KI-0221', 
            name: 'Guanylate kinase NMPK21', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €180.00', 
            description: 'Eukaryotic origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m4e9df22ed3429673' 
        },
        { 
            id: 'E-KI-0222', 
            name: 'UMP/CMP kinase NMPK22', 
            categories: ['enzyme', 'phospho', 'nmpk'], 
            price: 'from €180.00', 
            description: 'Human CMPK1, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mcce7023b1e04e33f' 
        },

        { 
            id: 'E-KI-0332', 
            name: 'Nucleoside-diphosphate kinase NDPK32', 
            categories: ['enzyme', 'phospho', 'ndpk'], 
            price: 'from €160.00', 
            description: 'Bacterial origin, thermostable up to 50°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m507ffcce7e98331f' 
        },
        { 
            id: 'E-KI-0333', 
            name: 'Nucleoside-diphosphate kinase NDPK33', 
            categories: ['enzyme', 'phospho', 'ndpk'], 
            price: 'from €180.00', 
            description: 'Human NME2, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mb9bb6c95c24d6cb6' 
        },

        { 
            id: 'E-KI-0703', 
            name: 'Polyphosphate kinase PPK03', 
            categories: ['enzyme', 'phospho', 'atpreg', 'ppk'], 
            price: 'from €580.00', 
            description: 'Bacterial PPK2 (class I), mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m76885ee72fe57fb5' 
        },
        { 
            id: 'E-KI-0704', 
            name: 'Polyphosphate kinase PPK04', 
            categories: ['enzyme', 'phospho', 'atpreg', 'ppk'], 
            price: 'from €580.00', 
            description: 'Bacterial PPK2 (class III), thermostable up to 50°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mf8e5b47f4c0fee07' 
        },
        { 
            id: 'E-KI-0705', 
            name: 'Polyphosphate kinase PPK05', 
            categories: ['enzyme', 'phospho', 'atpreg', 'ppk'], 
            price: 'from €200.00', 
            description: 'Bacterial PPK2 (class III), thermostable up to 50°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m157b53390b2b4d1e' 
        },
        { 
            id: 'E-KI-0707', 
            name: 'Polyphosphate kinase PPK07', 
            categories: ['enzyme', 'phospho', 'atpreg', 'ppk'], 
            price: 'from €200.00', 
            description: 'Bacterial PPK2 (class III), mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m4f7f56ac3bba5775' 
        },
        { 
            id: 'E-KI-0708', 
            name: 'Polyphosphate kinase PPK08', 
            categories: ['enzyme', 'phospho', 'atpreg', 'ppk'], 
            price: 'from €200.00', 
            description: 'Bacterial PPK2 (class III), mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m0c6e0200224c74dc' 
        },

        { 
            id: 'E-KI-0401', 
            name: 'Acetate kinase AcK01', 
            categories: ['enzyme', 'phospho', 'atpreg', 'otherPhospho'], 
            price: 'from €220.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mb14a672cbd99c0ac' 
        },
        { 
            id: 'E-KI-0501', 
            name: 'Creatine kinase (M-type) CK01', 
            categories: ['enzyme', 'phospho', 'atpreg', 'otherPhospho'], 
            price: 'from €220.00', 
            description: 'Human CKM, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m8ffbc05a0f8db538' 
        },
        { 
            id: 'E-KI-0601', 
            name: 'Pyruvate kinase PK01', 
            categories: ['enzyme', 'phospho', 'atpreg', 'otherPhospho'], 
            price: 'from €220.00', 
            description: 'Archaeal origin, thermostable up to (at least) 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/me9de5efeb3637685' 
        },
        { 
            id: 'E-KI-0602', 
            name: 'Pyruvate kinase PK02', 
            categories: ['enzyme', 'phospho', 'atpreg', 'otherPhospho'], 
            price: 'from €180.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m64868f34d47a192a' 
        },
        { 
            id: 'E-KI-0801', 
            name: 'Glucose/glucosamine kinase (ADP-specific) GK01', 
            categories: ['enzyme', 'phospho', 'otherPhospho'], 
            price: 'from €220.00', 
            description: 'Archaeal origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m454a09d46ef4f1cf' 
        },
        { 
            id: 'E-KI-0901', 
            name: 'Ribokinase RK01', 
            categories: ['enzyme', 'phospho', 'otherPhospho'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli rbsK</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m696dece1cb4d9f82' 
        },
        { 
            id: 'E-KI-0902', 
            name: 'Ribokinase RK02', 
            categories: ['enzyme', 'phospho', 'otherPhospho'], 
            price: 'from €290.00', 
            description: 'Bacterial origin, thermostable up to 60°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mfe159f570a4cdcd8' 
        },
        { 
            id: 'E-KI-0903', 
            name: 'Ribokinase RK03', 
            categories: ['enzyme', 'phospho', 'otherPhospho'], 
            price: 'from €290.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mc8e9361c70c5c047' 
        },
        
        { 
            id: 'E-NH-0001', 
            name: 'Ribonucleoside hydrolase NH01', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli rihA</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mf28340ca2b72152d' 
        },
        { 
            id: 'E-NH-0002', 
            name: 'Ribonucleoside hydrolase NH02', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli rihB</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/md027e138bc449ecb' 
        },
        { 
            id: 'E-NH-0003', 
            name: 'Ribonucleoside hydrolase NH03', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli rihC</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m9694aec0a2f8933e' 
        },
        { 
            id: 'E-NH-0004', 
            name: 'Uridine hydrolase NH04', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €290.00', 
            description: 'Eukaryotic origin, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m94ca50744f8fcd2e' 
        },
        { 
            id: 'E-NH-0006', 
            name: 'MTA/SAH nucleosidase NH06', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli mtnN</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m48c8690ce9657ccc' 
        },

        { 
            id: 'E-AD-0001', 
            name: 'Adenosine deaminase AD01', 
            categories: ['enzyme', 'hydro'], 
            price: 'from €180.00', 
            description: '<i>Escherichia coli ada</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m90badce5da741912' 
        },

        { 
            id: 'E-PM-0001', 
            name: 'Phosphopentomutase PM01', 
            categories: ['enzyme', 'intraphos'], 
            price: 'from €290.00', 
            description: '<i>Escherichia coli deoB</i>, mesophilic', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m555c1992eb24f917' 
        },
        { 
            id: 'E-PM-0002', 
            name: 'Phosphopentomutase PM02', 
            categories: ['enzyme', 'intraphos'], 
            price: 'from €290.00', 
            description: 'Bacterial origin, thermostable up to 60°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mee6340043a38de08' 
        },
        { 
            id: 'E-PM-0003', 
            name: 'Phosphopentomutase PM03', 
            categories: ['enzyme', 'intraphos'], 
            price: 'from €290.00', 
            description: 'Bacterial origin, thermostable up to 80°C', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m4081cbe8ce75de09' 
        },

        { 
            id: 'K-PUB-0001', 
            name: 'PUB high phosphate detection kit', 
            categories: ['kit', 'pub'], 
            price: '€355.00', 
            description: 'PUB assay for the detection of high phosphate concentrations (>75 µM phosphate)', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m104e05b510def4fa' 
        },
        { 
            id: 'K-PUB-0002', 
            name: 'PUB low phosphate detection kit', 
            categories: ['kit', 'pub'], 
            price: '€365.00', 
            description: 'PUB assay for the detection of low phosphate concentrations (5-200 µM phosphate)', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m87ca2a90ab07281e' 
        },
        { 
            id: 'K-PUB-0003', 
            name: 'PUB pyrophosphate detection kit', 
            categories: ['kit', 'pub'], 
            price: '€455.00', 
            description: 'PUB assay for the detection of pyrophosphate', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m1af416641db8ee0e' 
        },

        { 
            id: 'K-ES-0001', 
            name: 'Nucleoside2NTP Ribo Kit', 
            categories: ['kit', 'eset'], 
            price: '€390.00', 
            description: 'Enzymatic reaction kit for production of nucleoside 5\'-triphosphates from ribonucleosides', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m44754086e3e833cb' 
        },
        { 
            id: 'K-ES-0002', 
            name: 'Nucleoside2NTP dRibo Kit', 
            categories: ['kit', 'eset'], 
            price: '€390.00', 
            description: 'Enzymatic reaction kit for production of nucleoside 5\'-triphosphates from deoxyribonucleosides', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/medc15ca1b732708f' 
        },
        { 
            id: 'K-ES-0003', 
            name: 'Nucleoside2NTP MultiMod Kit', 
            categories: ['kit', 'eset'], 
            price: '€570.00', 
            description: 'Enzymatic reaction kit for production of nucleoside 5\'-triphosphates from any nucleosides', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mef5086a7186bcce9' 
        },
        { 
            id: 'K-ES-0004', 
            name: 'Nucleoside2NTP Booster Pack', 
            categories: ['kit', 'eset'], 
            price: '€470.00', 
            description: 'Enzymatic addition to Nucleoside2NTP kits increasing the yield of nucleoside 5\'-triphosphates', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/ma57be5ad7685b3f5' 
        },

        { 
            id: 'C-SP-0001', 
            name: 'D-Ribose 1-phosphate barium salt', 
            categories: ['fineChemical', 'sugar'], 
            price: 'from €109.00', 
            description: 'enzymatically procuced, &gt;95% purity', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m34333ca6ac29d1da' 
        },
        { 
            id: 'C-SP-0002', 
            name: '2-Deoxy-D-Ribose 1-phosphate barium salt', 
            categories: ['fineChemical', 'sugar'], 
            price: 'from €109.00', 
            description: 'enzymatically procuced, >95% purity', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m57515b4a0b98fe82' 
        },
        { 
            id: 'C-SP-0003', 
            name: 'Arabinose 1-phosphate barium salt', 
            categories: ['fineChemical', 'sugar'], 
            price: 'from €140.00', 
            description: 'enzymatically procuced, >95% purity', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m53635105bae4881e' 
        },

        { 
            id: 'C-PD-0001', 
            name: 'Acetylphosphate lithium salt', 
            categories: ['fineChemical', 'donor'], 
            price: 'from €30.00', 
            description: '100% biocatalysis compatible, >95% purity', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/mcc8f2dc59dd6f6ea' 
        },

        { 
            id: 'C-NTP-0001', 
            name: '5-Formyl-2\'-deoxy-CTP', 
            categories: ['fineChemical', 'ntp'], 
            price: 'from €230.00', 
            description: '10 mM solution, >90% purity', 
            url: 'https://www.bionukleo.com//app/module/webproduct/goto/m/m11ac12909b3daa9b' 
        },

        // Add more products with multiple categories
    ];

    const categoryColors = {
        'redox': '#eeeeee',
        'pento': '#d7e7d3',
        'phospho': '#fdd1d1',
        'hydro': '#d9e0e6',
        'intraphos': '#fde7d1',
        'pub': '#f1ceef',
        'eset': '#fefadb',
        'sugar': '#ffffff',
        'donor': '#ffffff',
        'ntp': '#ffffff'
    };

    function renderProducts(targetId, filterText = '', filterCategory = 'all') {
        const productGrid = document.getElementById(targetId);
        if (!productGrid) return;

        productGrid.innerHTML = '';

        const filteredProducts = products.filter(product => {
            const matchesText = !filterText || product.name.toLowerCase().includes(filterText.toLowerCase());
            const matchesCategory = filterCategory === 'all' || product.categories.includes(filterCategory);
            return matchesText && matchesCategory;
        });

        if (filteredProducts.length === 0) {
            const msg = document.createElement('div');
            msg.classList.add('no-results', 'cm-text-bold', 'cm-text-large');
            msg.innerText = 'No products found matching the filters.';
            productGrid.appendChild(msg);
            return;
        }

        filteredProducts.forEach(product => {
            const productLink = document.createElement('a');
            productLink.href = product.url;
            productLink.classList.add('cm-grid-item-link');
            productLink.style.textDecoration = 'none';

            // background color
            for (const cat of product.categories) {
                if (categoryColors[cat]) {
                    productLink.style.backgroundColor = categoryColors[cat];
                    break;
                }
            }

            const el = document.createElement('div');
            el.classList.add('cm-grid-item');
            el.innerHTML = `
                <h3 class="product-name cm-text-large">${product.name}</h3>
                <p class="product-catalog-number cm-text-italic cm-text-small">${product.id}</p>
                <p class="product-description cm-text-regular cm-text-small">${product.description}</p>
                <p class="product-price cm-text-italic cm-text-medium">${product.price}</p>
            `;

            productLink.appendChild(el);
            productGrid.appendChild(productLink);
        });
    }

    return { renderProducts };
})();

