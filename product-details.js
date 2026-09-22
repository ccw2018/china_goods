// English buying briefs; example specifications, not supplier guarantees.
const productDetails = [
  {
    "name": {
      "en": "Precision High-Speed Spindle Bearings"
    },
    "category": "Industrial",
    "description": {
      "en": "For CNC spindles and precision rotating assemblies. Evaluate heat generation, rigidity and runout together to achieve stable machining at the required operating speed."
    },
    "specs": {
      "en": [
        "Precision option: ISO P4 class",
        "Design option: hybrid ceramic rolling elements",
        "Specify: bore, contact angle, preload and lubrication",
        "Verify: permissible speed for the exact bearing arrangement"
      ]
    },
    "value": {
      "en": "Prioritize verified runout and service life over the lowest unit price. A matched bearing set can reduce spindle downtime and replacement labor."
    }
  },
  {
    "name": {
      "en": "Low-Noise Deep Groove Ball Bearings"
    },
    "category": "Industrial",
    "description": {
      "en": "A versatile bearing choice for motors, fans and general machinery carrying radial loads with moderate axial loads. Select seals and clearance for the operating environment."
    },
    "specs": {
      "en": [
        "Series options: 6000 / 6200 / 6300",
        "Shield options: ZZ metal shields / 2RS seals",
        "Clearance options: CN / C3, subject to fit and temperature",
        "Compare: dynamic load rating, noise and grease life"
      ]
    },
    "value": {
      "en": "Standardize sizes across machines to simplify spare parts. Compare noise and durability under the same load rather than paying for an unnecessary precision grade."
    }
  },
  {
    "name": {
      "en": "Precision Profile Linear Guide Rails"
    },
    "category": "Industrial",
    "description": {
      "en": "Provide guided motion for automation, inspection equipment and CNC axes. Rail alignment and mounting stiffness are as important as the guide itself."
    },
    "specs": {
      "en": [
        "Example rail sizes: 15 / 20 / 25 / 30 / 35 mm",
        "Options: ball or roller guide blocks",
        "Specify: preload, accuracy class and rail length",
        "Verify: load, moment capacity and lubrication interval"
      ]
    },
    "value": {
      "en": "Use high rigidity where cutting or process forces demand it; a standard ball guide may offer better value for lighter positioning duties."
    }
  },
  {
    "name": {
      "en": "Precision Ground Ball Screws"
    },
    "category": "Industrial",
    "description": {
      "en": "Convert rotary motion into precise linear travel for machine tools and automation. Select the screw and support bearings as a complete motion assembly."
    },
    "specs": {
      "en": [
        "Example diameters: 16–40 mm",
        "Example leads: 5 / 10 / 20 mm per revolution",
        "Precision option: C5 grade, with supplier inspection report",
        "Verify: backlash, critical speed, buckling and life"
      ]
    },
    "value": {
      "en": "Match lead and accuracy to the application. Reserve ground screws for demanding positioning; compare rolled alternatives for less critical axes."
    }
  },
  {
    "name": {
      "en": "Custom Precision CNC Machined Parts"
    },
    "category": "Industrial",
    "description": {
      "en": "Drawing-based metal and engineering-plastic components for prototypes and production assemblies. Specify functional dimensions and surface requirements before quotation."
    },
    "specs": {
      "en": [
        "Material options: aluminum 6061 / 7075, stainless 304 / 316",
        "Example critical-dimension target: ±0.01 mm, subject to geometry",
        "Example finish target: Ra 1.6 µm on specified surfaces",
        "Request: material traceability and dimensional inspection"
      ]
    },
    "value": {
      "en": "Apply tight tolerances only to functional features. Batch similar parts and simplify setups to reduce machining cost without sacrificing fit."
    }
  },
  {
    "name": {
      "en": "AC Servo Motor and Drive Systems"
    },
    "category": "Industrial",
    "description": {
      "en": "Closed-loop motion systems for accurate positioning, smooth low-speed motion and repeatable automation. Size the drive to the full motion profile."
    },
    "specs": {
      "en": [
        "Example power classes: 400 W / 750 W / 1.5 kW",
        "Feedback option: absolute encoder",
        "Network options: EtherCAT or pulse control",
        "Verify: continuous torque, peak duty and load inertia"
      ]
    },
    "value": {
      "en": "A correctly sized matched drive and motor can reduce commissioning time. Compare installed system cost, including cables, tuning and service support."
    }
  },
  {
    "name": {
      "en": "Rechargeable Lithium-Ion Battery Packs"
    },
    "category": "Energy",
    "description": {
      "en": "Application-specific energy storage for portable electronics and equipment. Select chemistry and pack architecture around power demand, temperature and expected life."
    },
    "specs": {
      "en": [
        "Example nominal cell voltages: 3.6 / 3.7 V, chemistry dependent",
        "Specify: pack voltage, Wh and continuous discharge current",
        "Protection: overcharge, overdischarge, temperature and short circuit",
        "Request: cell traceability and applicable transport test documents"
      ]
    },
    "value": {
      "en": "Compare usable energy and replacement frequency. A traceable cell supply and suitable protection can be worth more than a larger advertised capacity."
    }
  },
  {
    "name": {
      "en": "High-Efficiency N-Type Solar Modules"
    },
    "category": "Energy",
    "description": {
      "en": "Photovoltaic modules for rooftop and ground-mounted systems. High module efficiency helps make better use of limited installation area."
    },
    "specs": {
      "en": [
        "Technology option: N-type TOPCon",
        "Example module-efficiency target: 23% or above at STC",
        "Compare: temperature coefficient and annual degradation terms",
        "Verify: module dimensions, loading and inverter compatibility"
      ]
    },
    "value": {
      "en": "Evaluate cost per installed watt and modeled lifetime energy yield. Higher efficiency is most valuable where roof space or mounting costs constrain the project."
    }
  },
  {
    "name": {
      "en": "Hybrid Solar Inverters"
    },
    "category": "Energy",
    "description": {
      "en": "Coordinate solar generation, battery storage and grid interaction. Choose a topology suited to the site and local utility requirements."
    },
    "specs": {
      "en": [
        "Example residential power classes: 5 / 8 / 10 kW",
        "Feature option: multiple independent MPPT inputs",
        "Specify: battery voltage, PV voltage window and backup output",
        "Verify: local grid approval and backup transfer behavior"
      ]
    },
    "value": {
      "en": "Compare weighted conversion efficiency, service coverage and battery compatibility. A well-matched inverter reduces integration cost and avoidable energy losses."
    }
  },
  {
    "name": {
      "en": "LiFePO4 Portable Power Stations"
    },
    "category": "Energy",
    "description": {
      "en": "Portable AC and DC power for camping, mobile work and backup essentials. Distinguish continuous output from short-duration surge capability."
    },
    "specs": {
      "en": [
        "Example capacity: 1–2 kWh",
        "Example continuous AC output: 1–2 kW",
        "Output option: pure sine wave; input option: solar MPPT",
        "Verify: usable AC energy, fan noise and cycle-test conditions"
      ]
    },
    "value": {
      "en": "Compare delivered AC watt-hours per purchase cost. Right-size capacity to the load and duration instead of paying for an oversized unit."
    }
  },
  {
    "name": {
      "en": "Smart AC EV Charging Stations"
    },
    "category": "Energy",
    "description": {
      "en": "AC charging equipment for homes and workplaces. Charging speed depends on the vehicle onboard charger and available electrical supply."
    },
    "specs": {
      "en": [
        "Example ratings: 7.4 kW single phase / 11 or 22 kW three phase",
        "Connector: select for vehicle and destination market",
        "Feature options: load balancing, RFID and OCPP",
        "Verify: residual-current protection and installation requirements"
      ]
    },
    "value": {
      "en": "Compare equipment plus installation and energy-management costs. Dynamic load balancing may avoid unnecessary supply upgrades when the site supports it."
    }
  },
  {
    "name": {
      "en": "LiFePO4 Energy Storage Battery Packs"
    },
    "category": "Energy",
    "description": {
      "en": "Battery modules for compatible stationary storage systems. Match battery management, inverter communication and usable capacity before purchase."
    },
    "specs": {
      "en": [
        "Example configuration: 51.2 V, 100 Ah, 5.12 kWh nominal",
        "Communication options: CAN / RS485",
        "Specify: usable depth of discharge and continuous current",
        "Request: cycle life with temperature, C-rate and end-of-life criteria"
      ]
    },
    "value": {
      "en": "Compare warranted usable energy throughput and local service. A higher cycle-life claim only adds value when its test conditions match the intended use."
    }
  },
  {
    "name": {
      "en": "Multilayer Printed Circuit Boards"
    },
    "category": "Electronics",
    "description": {
      "en": "Custom bare boards for industrial controls and electronics. Build quality depends on the stack-up, material, impedance control and inspection plan."
    },
    "specs": {
      "en": [
        "Example stack-ups: 4 / 6 / 8 layers",
        "Material option: high-Tg FR-4",
        "Specify: copper weight, minimum geometry and controlled impedance",
        "Request: electrical test and fabrication inspection criteria"
      ]
    },
    "value": {
      "en": "Use a standard stack-up when possible. Reserve specialized laminates and fine geometry for signals or layouts that actually need them."
    }
  },
  {
    "name": {
      "en": "High-CRI LED Strip Lights"
    },
    "category": "Electronics",
    "description": {
      "en": "Flexible lighting for interiors, cabinets and architectural accents. Evaluate color consistency and heat dissipation alongside brightness."
    },
    "specs": {
      "en": [
        "Example supply: 24 V DC",
        "Example color-rendering target: CRI 90 or above",
        "Example color temperatures: 2700 / 3000 / 4000 / 6500 K",
        "Specify: lumens per meter, watts per meter and required ingress rating"
      ]
    },
    "value": {
      "en": "Compare useful light output and color consistency per installed cost, including power supplies, aluminum channels and controls."
    }
  },
  {
    "name": {
      "en": "GaN USB-C Power Delivery Chargers"
    },
    "category": "Electronics",
    "description": {
      "en": "Compact chargers for compatible phones, tablets and notebooks. Device negotiation and cable capability determine actual charging power."
    },
    "specs": {
      "en": [
        "Example power classes: 65 / 100 / 140 W",
        "Protocol options: USB PD and PPS; EPR for compatible higher-power modes",
        "Specify: single-port output and simultaneous-port power sharing",
        "Verify: rated cable, thermal behavior and market safety approvals"
      ]
    },
    "value": {
      "en": "One properly matched multiport charger may replace several adapters. Compare sustained power and included cables rather than headline total wattage."
    }
  },
  {
    "name": {
      "en": "Active Noise Cancelling Wireless Earbuds"
    },
    "category": "Electronics",
    "description": {
      "en": "Compact audio devices for commuting, calls and everyday listening. Comfort, microphone quality and tuning matter as much as feature counts."
    },
    "specs": {
      "en": [
        "Feature options: ANC, transparency and multipoint",
        "Example battery target: at least 6 hours per charge, with test conditions",
        "Specify: codec and phone compatibility",
        "Compare: ANC-on runtime, call samples and charging-case capacity"
      ]
    },
    "value": {
      "en": "Prioritize reliable calls, fit and replaceable ear tips. Compare listening time under the same ANC and volume settings."
    }
  },
  {
    "name": {
      "en": "AMOLED GPS Smart Watches"
    },
    "category": "Electronics",
    "description": {
      "en": "Wearables for activity tracking, notifications and outdoor exercise. Choose a model compatible with the intended phone and activity ecosystem."
    },
    "specs": {
      "en": [
        "Display option: AMOLED",
        "Positioning option: built-in multi-GNSS",
        "Specify: GPS runtime separately from typical daily runtime",
        "Verify: water-use rating and supported app features"
      ]
    },
    "value": {
      "en": "Choose sensors and navigation features you will use. Compare battery life, app support and any subscription fees over the ownership period."
    }
  },
  {
    "name": {
      "en": "4K PoE Security Cameras"
    },
    "category": "Electronics",
    "description": {
      "en": "Network cameras for detailed monitoring with power and data over one Ethernet cable. Match optics and night performance to the scene."
    },
    "specs": {
      "en": [
        "Example resolution: 3840 × 2160",
        "Feature options: H.265, WDR and ONVIF interoperability",
        "Specify: sensor size, lens angle and frame rate at full resolution",
        "Verify: outdoor rating, recording compatibility and update support"
      ]
    },
    "value": {
      "en": "PoE can simplify cabling. Compare usable night footage, storage demand and support life instead of resolution alone."
    }
  },
  {
    "name": {
      "en": "Corrosion-Resistant Stainless Steel Fasteners"
    },
    "category": "Hardware",
    "description": {
      "en": "Bolts, nuts and washers for machinery and structures exposed to moisture. Material grade, strength and joint design determine suitability."
    },
    "specs": {
      "en": [
        "Material options: A2 / A4 stainless steel",
        "Example strength classes: A2-70 / A4-80, where specified",
        "Specify: thread, length, tolerance and applicable fastener standard",
        "Request: material and mechanical-property documentation"
      ]
    },
    "value": {
      "en": "Use the grade suited to the environment. Consistent threads and traceable batches can reduce assembly rework and maintenance."
    }
  },
  {
    "name": {
      "en": "Brushless Cordless Drill Drivers"
    },
    "category": "Hardware",
    "description": {
      "en": "Cordless drilling and fastening tools for installation and workshop tasks. Select gearing and chuck capacity for the intended materials."
    },
    "specs": {
      "en": [
        "Example platform: 18 V nominal / 20 V max, depending on labeling",
        "Chuck option: 13 mm keyless",
        "Feature options: brushless motor, two-speed gearbox and clutch",
        "Compare: tested hard/soft torque, weight and battery capacity"
      ]
    },
    "value": {
      "en": "A shared battery platform can lower the cost of additional tools. Compare the complete kit, warranty and battery replacement cost."
    }
  },
  {
    "name": {
      "en": "Precision T-Slot Aluminum Extrusions"
    },
    "category": "Hardware",
    "description": {
      "en": "Modular profiles for machine frames, workstations and enclosures. Select section geometry for stiffness and connection strength."
    },
    "specs": {
      "en": [
        "Example profiles: 2020 / 3030 / 4040 / 4080",
        "Material options: 6063 / 6061, with stated temper",
        "Finish option: anodized surface",
        "Specify: slot compatibility, straightness and section properties"
      ]
    },
    "value": {
      "en": "Standard profiles and reusable connectors simplify assembly and future changes. Compare cost per finished frame rather than price per meter alone."
    }
  },
  {
    "name": {
      "en": "Variable-Speed Centrifugal Water Pumps"
    },
    "category": "Hardware",
    "description": {
      "en": "Fluid-handling equipment for compatible clean-water circulation and pressure boosting. Select the pump at its required flow and head operating point."
    },
    "specs": {
      "en": [
        "Specify: duty flow in m³/h and head in meters",
        "Feature option: variable-frequency speed control",
        "Specify: wetted materials, seal type and fluid temperature",
        "Request: pump curve, efficiency curve and NPSH requirement"
      ]
    },
    "value": {
      "en": "A pump selected near its efficient operating region can lower energy cost. Compare lifecycle power use, seals and service access."
    }
  },
  {
    "name": {
      "en": "Compact Pneumatic Air Cylinders"
    },
    "category": "Hardware",
    "description": {
      "en": "Compressed-air actuators for clamping, transfer and factory automation. Size bore and stroke around force, speed and installation space."
    },
    "specs": {
      "en": [
        "Example bores: 16–63 mm",
        "Example supply range to specify: 0.1–0.7 MPa, model dependent",
        "Options: magnetic piston, cushioning and sensor slots",
        "Verify: force at working pressure, side-load limits and air quality"
      ]
    },
    "value": {
      "en": "Avoid oversizing bore and stroke to limit air consumption. Standard mounting patterns and seal availability reduce replacement cost."
    }
  },
  {
    "name": {
      "en": "Industrial Diamond Cutting Blades"
    },
    "category": "Hardware",
    "description": {
      "en": "Diamond tooling for compatible masonry, tile or stone. Match bond, segment design and cooling method to the material and machine."
    },
    "specs": {
      "en": [
        "Example diameters: 115 / 125 / 230 / 350 mm",
        "Specify: exact arbor and machine compatibility",
        "Design options: continuous rim, turbo or segmented",
        "Verify: blade-marked maximum rpm and wet/dry use"
      ]
    },
    "value": {
      "en": "Compare cost per acceptable cut, edge quality and usable life. A material-specific blade can reduce chipping and wasted workpieces."
    }
  },
  {
    "name": {
      "en": "Vacuum-Insulated Stainless Steel Bottles"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Reusable drink containers for commuting, work and outdoor use. Lid design, cleaning access and finish durability shape daily usability."
    },
    "specs": {
      "en": [
        "Example capacities: 500 / 750 / 1000 mL",
        "Construction option: double-wall vacuum insulation",
        "Material option: 304 stainless steel inner wall",
        "Request: leak tests, food-contact documentation and thermal test conditions"
      ]
    },
    "value": {
      "en": "Prioritize durable seals and replaceable lids. Compare heat retention under equal fill volume, starting temperature and ambient conditions."
    }
  },
  {
    "name": {
      "en": "LiDAR Robot Vacuum and Mop Systems"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Automated floor-cleaning systems for compatible home layouts. Navigation, brush design and maintenance convenience determine practical cleaning results."
    },
    "specs": {
      "en": [
        "Navigation option: LiDAR mapping and room scheduling",
        "Dock options: dust emptying and mop washing",
        "Specify: threshold crossing, body height and carpet behavior",
        "Compare: debris pickup tests, obstacle handling and consumable availability"
      ]
    },
    "value": {
      "en": "Measure cleaning performance and maintenance effort. Include bags, brushes, filters and replacement batteries in the ownership budget."
    }
  },
  {
    "name": {
      "en": "Digital Dual-Zone Air Fryers"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Countertop convection appliances for preparing separate dishes with independent cooking zones. Usable basket area affects batch size."
    },
    "specs": {
      "en": [
        "Example combined basket volume: 8–10 L",
        "Feature options: independent temperature and synchronized finish",
        "Specify: rated voltage, total input power and temperature range",
        "Verify: accessible cleaning surfaces and market electrical approvals"
      ]
    },
    "value": {
      "en": "Compare usable cooking area and meal throughput. A smaller efficient appliance may offer better value than excess capacity for everyday portions."
    }
  },
  {
    "name": {
      "en": "Lightweight Waterproof Camping Tents"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Portable shelters for trips matched to the tent season rating and terrain. Ventilation, packed weight and pitching stability affect comfort."
    },
    "specs": {
      "en": [
        "Example capacity: 2–3 people; confirm actual floor dimensions",
        "Pole option: aluminum alloy",
        "Example flysheet target: 3000 mm hydrostatic head with test method",
        "Verify: floor waterproofing, taped seams and packed weight"
      ]
    },
    "value": {
      "en": "Balance weather suitability against carrying weight. Durable poles and repairable parts can offer better long-term value than the lightest fabric."
    }
  },
  {
    "name": {
      "en": "Torque-Sensing Electric Bicycles"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Pedal-assist bicycles for commuting and recreation. Select frame fit, braking and assistance behavior around the rider and route."
    },
    "specs": {
      "en": [
        "Feature option: torque-sensor pedal assistance",
        "Example battery class: 400–700 Wh",
        "Brake option: hydraulic disc brakes",
        "Specify: legal motor/assist limits, payload and range-test conditions"
      ]
    },
    "value": {
      "en": "Compare battery replacement, service access and real route performance. Purchase range claims only with stated rider weight, terrain and assistance mode."
    }
  },
  {
    "name": {
      "en": "Durable Carry-On Travel Backpacks"
    },
    "category": "Lifestyle",
    "description": {
      "en": "Organized luggage for commuting and short trips. A comfortable harness and accessible compartments help make efficient use of cabin space."
    },
    "specs": {
      "en": [
        "Example capacities: 25–40 L",
        "Fabric options: 420D / 600D nylon or polyester",
        "Specify: external dimensions, empty weight and laptop compartment",
        "Verify: airline size limits, zipper quality and seam reinforcement"
      ]
    },
    "value": {
      "en": "Prioritize comfort, repairable hardware and useful organization. Compare weight and construction rather than buying capacity that exceeds travel limits."
    }
  }
];
