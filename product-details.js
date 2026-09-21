// Editorial buying briefs, not specifications of a particular supplier or SKU.
// Each field carries four locales: en, zh (Simplified Chinese), pt (Brazilian Portuguese), es (Latin American Spanish).
const productDetails = [
  {
    name: { en: 'Precision High-Speed Spindle Bearings', zh: '精密高速主轴轴承', pt: 'Rolamentos de Fuso de Alta Velocidade de Precisão', es: 'Rodamientos de Husillo de Alta Velocidad de Precisión' },
    category: 'Industrial',
    description: {
      en: 'For CNC spindles and precision rotating assemblies. Evaluate heat generation, rigidity and runout together to achieve stable machining at the required operating speed.',
      zh: '用于 CNC 主轴和精密旋转组件。需综合评估发热、刚性与跳动，以在所需工作转速下实现稳定加工。',
      pt: 'Para fusos CNC e conjuntos rotativos de precisão. Avalie geração de calor, rigidez e excentricidade em conjunto para obter usinagem estável na velocidade operacional necessária.',
      es: 'Para husillos CNC y conjuntos rotativos de precisión. Evalúe la generación de calor, la rigidez y el alabeo en conjunto para lograr un mecanizado estable a la velocidad operativa requerida.'
    },
    specs: {
      en: ['Precision option: ISO P4 class', 'Design option: hybrid ceramic rolling elements', 'Specify: bore, contact angle, preload and lubrication', 'Verify: permissible speed for the exact bearing arrangement'],
      zh: ['精度选项：ISO P4 级', '设计选项：混合陶瓷滚动体', '需指定：内径、接触角、预紧与润滑', '需核实：特定轴承配置的许用转速'],
      pt: ['Opção de precisão: classe ISO P4', 'Opção de design: elementos rolantes cerâmicos híbridos', 'Especifique: furo, ângulo de contato, pré-carga e lubrificação', 'Verifique: velocidade admissível para o arranjo exato de rolamento'],
      es: ['Opción de precisión: clase ISO P4', 'Opción de diseño: elementos rodantes cerámicos híbridos', 'Especifique: diámetro interior, ángulo de contacto, precarga y lubricación', 'Verifique: velocidad admisible para el arreglo exacto de rodamientos']
    },
    value: {
      en: 'Prioritize verified runout and service life over the lowest unit price. A matched bearing set can reduce spindle downtime and replacement labor.',
      zh: '优先考虑已验证的跳动与使用寿命，而非最低单价。配对的轴承组可减少主轴停机与更换工时。',
      pt: 'Priorize excentricidade verificada e vida útil em vez do menor preço unitário. Um conjunto de rolamentos pareado pode reduzir o tempo de inatividade do fuso e a mão de obra de substituição.',
      es: 'Priorice el alabeo verificado y la vida útil sobre el precio unitario más bajo. Un juego de rodamientos emparejado puede reducir el tiempo de inactividad del husillo y la mano de obra de reemplazo.'
    }
  },
  {
    name: { en: 'Low-Noise Deep Groove Ball Bearings', zh: '低噪声深沟球轴承', pt: 'Rolamentos Rígidos de Esferas de Baixo Ruído', es: 'Rodamientos Rígidos de Bolas de Bajo Ruido' },
    category: 'Industrial',
    description: {
      en: 'A versatile bearing choice for motors, fans and general machinery carrying radial loads with moderate axial loads. Select seals and clearance for the operating environment.',
      zh: '适用于电机、风扇及承受径向载荷与中等轴向载荷的通用机械。应根据工作环境选择密封与游隙。',
      pt: 'Uma opção versátil de rolamento para motores, ventiladores e máquinas em geral que suportam cargas radiais com cargas axiais moderadas. Selecione vedações e folga para o ambiente operacional.',
      es: 'Una opción versátil de rodamiento para motores, ventiladores y maquinaria general que soporta cargas radiales con cargas axiales moderadas. Seleccione sellos y holgura según el entorno operativo.'
    },
    specs: {
      en: ['Series options: 6000 / 6200 / 6300', 'Shield options: ZZ metal shields / 2RS seals', 'Clearance options: CN / C3, subject to fit and temperature', 'Compare: dynamic load rating, noise and grease life'],
      zh: ['系列选项：6000 / 6200 / 6300', '防护选项：ZZ 金属防尘盖 / 2RS 密封', '游隙选项：CN / C3，视配合与温度而定', '需比较：动态额定载荷、噪声与润滑寿命'],
      pt: ['Opções de série: 6000 / 6200 / 6300', 'Opções de blindagem: blindagens metálicas ZZ / vedações 2RS', 'Opções de folga: CN / C3, conforme ajuste e temperatura', 'Compare: carga dinâmica nominal, ruído e vida útil da graxa'],
      es: ['Opciones de serie: 6000 / 6200 / 6300', 'Opciones de protección: cubiertas metálicas ZZ / sellos 2RS', 'Opciones de holgura: CN / C3, según ajuste y temperatura', 'Compare: carga dinámica nominal, ruido y vida útil de la grasa']
    },
    value: {
      en: 'Standardize sizes across machines to simplify spare parts. Compare noise and durability under the same load rather than paying for an unnecessary precision grade.',
      zh: '在多台设备间统一尺寸以简化备件。在相同载荷下比较噪声与耐久性，而非为不必要的精度等级付费。',
      pt: 'Padronize tamanhos entre máquinas para simplificar peças de reposição. Compare ruído e durabilidade sob a mesma carga em vez de pagar por um grau de precisão desnecessário.',
      es: 'Estandarice tamaños entre máquinas para simplificar repuestos. Compare ruido y durabilidad bajo la misma carga en lugar de pagar por un grado de precisión innecesario.'
    }
  },
  {
    name: { en: 'Precision Profile Linear Guide Rails', zh: '精密直线导轨', pt: 'Guia Lineares de Perfil de Precisão', es: 'Guías Lineales de Perfil de Precisión' },
    category: 'Industrial',
    description: {
      en: 'Provide guided motion for automation, inspection equipment and CNC axes. Rail alignment and mounting stiffness are as important as the guide itself.',
      zh: '为自动化设备、检测设备与 CNC 轴提供导向运动。导轨的对齐与安装刚度与导轨本身同等重要。',
      pt: 'Proporcionam movimento guiado para automação, equipamentos de inspeção e eixos CNC. O alinhamento do trilho e a rigidez de montagem são tão importantes quanto a própria guia.',
      es: 'Proporcionan movimiento guiado para automatización, equipos de inspección y ejes CNC. La alineación del riel y la rigidez de montaje son tan importantes como la propia guía.'
    },
    specs: {
      en: ['Example rail sizes: 15 / 20 / 25 / 30 / 35 mm', 'Options: ball or roller guide blocks', 'Specify: preload, accuracy class and rail length', 'Verify: load, moment capacity and lubrication interval'],
      zh: ['导轨尺寸示例：15 / 20 / 25 / 30 / 35 mm', '选项：滚珠或滚柱滑块', '需指定：预紧、精度等级与导轨长度', '需核实：载荷、力矩能力与润滑间隔'],
      pt: ['Tamanhos de trilho de exemplo: 15 / 20 / 25 / 30 / 35 mm', 'Opções: blocos de guia de esferas ou rolamentos', 'Especifique: pré-carga, classe de precisão e comprimento do trilho', 'Verifique: carga, capacidade de momento e intervalo de lubrificação'],
      es: ['Tamaños de riel de ejemplo: 15 / 20 / 25 / 30 / 35 mm', 'Opciones: bloques de guía de bolas o rodillos', 'Especifique: precarga, clase de precisión y longitud del riel', 'Verifique: carga, capacidad de momento e intervalo de lubricación']
    },
    value: {
      en: 'Use high rigidity where cutting or process forces demand it; a standard ball guide may offer better value for lighter positioning duties.',
      zh: '在切削或工艺力要求高时采用高刚性；对于较轻的定位任务，标准滚珠导轨可能更具性价比。',
      pt: 'Use alta rigidez onde forças de corte ou de processo exigirem; uma guia de esferas padrão pode oferecer melhor valor para tarefas de posicionamento mais leves.',
      es: 'Use alta rigidez donde las fuerzas de corte o de proceso lo exijan; una guía de bolas estándar puede ofrecer mejor valor para tareas de posicionamiento más ligeras.'
    }
  },
  {
    name: { en: 'Precision Ground Ball Screws', zh: '精密研磨滚珠丝杠', pt: 'Fusos de Esferas Retificados de Precisão', es: 'Husillos de Bolas Rectificados de Precisión' },
    category: 'Industrial',
    description: {
      en: 'Convert rotary motion into precise linear travel for machine tools and automation. Select the screw and support bearings as a complete motion assembly.',
      zh: '将旋转运动转换为机床与自动化设备的精确直线位移。丝杠与支撑轴承应作为一个完整的运动组件来选型。',
      pt: 'Convertem movimento rotativo em deslocamento linear preciso para máquinas-ferramenta e automação. Selecione o fuso e os rolamentos de apoio como um conjunto de movimento completo.',
      es: 'Convierten el movimiento rotativo en desplazamiento lineal preciso para máquinas herramienta y automatización. Seleccione el husillo y los rodamientos de apoyo como un conjunto de movimiento completo.'
    },
    specs: {
      en: ['Example diameters: 16–40 mm', 'Example leads: 5 / 10 / 20 mm per revolution', 'Precision option: C5 grade, with supplier inspection report', 'Verify: backlash, critical speed, buckling and life'],
      zh: ['直径示例：16–40 mm', '导程示例：每转 5 / 10 / 20 mm', '精度选项：C5 级，附供应商检测报告', '需核实：背隙、临界转速、屈曲与寿命'],
      pt: ['Diâmetros de exemplo: 16–40 mm', 'Passos de exemplo: 5 / 10 / 20 mm por revolução', 'Opção de precisão: grau C5, com relatório de inspeção do fornecedor', 'Verifique: folga, velocidade crítica, flambagem e vida útil'],
      es: ['Diámetros de ejemplo: 16–40 mm', 'Pasos de ejemplo: 5 / 10 / 20 mm por revolución', 'Opción de precisión: grado C5, con informe de inspección del proveedor', 'Verifique: holgura, velocidad crítica, pandeo y vida útil']
    },
    value: {
      en: 'Match lead and accuracy to the application. Reserve ground screws for demanding positioning; compare rolled alternatives for less critical axes.',
      zh: '按应用匹配导程与精度。高要求定位采用研磨丝杠；对不太关键的轴可对比轧制替代方案。',
      pt: 'Combine o passo e a precisão com a aplicação. Reserve fusos retificados para posicionamento exigente; compare alternativas laminadas para eixos menos críticos.',
      es: 'Haga coincidir el paso y la precisión con la aplicación. Reserve husillos rectificados para posicionamiento exigente; compare alternativas laminadas para ejes menos críticos.'
    }
  },
  {
    name: { en: 'Custom Precision CNC Machined Parts', zh: '定制精密数控加工件', pt: 'Peças Usinadas CNC de Precisão Personalizadas', es: 'Piezas Mecanizadas CNC de Precisión a Medida' },
    category: 'Industrial',
    description: {
      en: 'Drawing-based metal and engineering-plastic components for prototypes and production assemblies. Specify functional dimensions and surface requirements before quotation.',
      zh: '根据图纸加工的金属与工程塑料零件，用于样件与量产装配。报价前需指定功能尺寸与表面要求。',
      pt: 'Componentes metálicos e de plástico de engenharia baseados em desenho, para protótipos e conjuntos de produção. Especifique dimensões funcionais e requisitos de superfície antes da cotação.',
      es: 'Componentes metálicos y de plástico de ingeniería basados en planos, para prototipos y conjuntos de producción. Especifique dimensiones funcionales y requisitos de superficie antes de la cotización.'
    },
    specs: {
      en: ['Material options: aluminum 6061 / 7075, stainless 304 / 316', 'Example critical-dimension target: ±0.01 mm, subject to geometry', 'Example finish target: Ra 1.6 µm on specified surfaces', 'Request: material traceability and dimensional inspection'],
      zh: ['材料选项：铝 6061 / 7075、不锈钢 304 / 316', '关键尺寸目标示例：±0.01 mm，视几何形状而定', '表面目标示例：指定表面 Ra 1.6 µm', '需索取：材料可追溯性与尺寸检测'],
      pt: ['Opções de material: alumínio 6061 / 7075, inox 304 / 316', 'Meta de dimensão crítica de exemplo: ±0,01 mm, conforme a geometria', 'Meta de acabamento de exemplo: Ra 1,6 µm nas superfícies especificadas', 'Solicite: rastreabilidade de material e inspeção dimensional'],
      es: ['Opciones de material: aluminio 6061 / 7075, inoxidable 304 / 316', 'Objetivo de dimensión crítica de ejemplo: ±0,01 mm, según la geometría', 'Objetivo de acabado de ejemplo: Ra 1,6 µm en superficies especificadas', 'Solicite: trazabilidad de material e inspección dimensional']
    },
    value: {
      en: 'Apply tight tolerances only to functional features. Batch similar parts and simplify setups to reduce machining cost without sacrificing fit.',
      zh: '仅对功能性特征应用严格公差。批量生产相似零件并简化装夹，以在不牺牲配合的前提下降低加工成本。',
      pt: 'Aplique tolerâncias apertadas apenas a características funcionais. Agrupe peças semelhantes e simplifique preparações para reduzir o custo de usinagem sem sacrificar o ajuste.',
      es: 'Aplique tolerancias estrictas solo a las características funcionales. Agrupe piezas similares y simplifique las preparaciones para reducir el costo de mecanizado sin sacrificar el ajuste.'
    }
  },
  {
    name: { en: 'AC Servo Motor and Drive Systems', zh: '交流伺服电机与驱动系统', pt: 'Sistemas de Servo Motor CA e Driver', es: 'Sistemas de Servomotor CA y Variador' },
    category: 'Industrial',
    description: {
      en: 'Closed-loop motion systems for accurate positioning, smooth low-speed motion and repeatable automation. Size the drive to the full motion profile.',
      zh: '用于精确定位、平稳低速运动与可重复自动化运动的闭环系统。驱动需按完整运动曲线选型。',
      pt: 'Sistemas de movimento em malha fechada para posicionamento preciso, movimento suave em baixa velocidade e automação repetível. Dimensionar o driver para o perfil de movimento completo.',
      es: 'Sistemas de movimiento en lazo cerrado para posicionamiento preciso, movimiento suave a baja velocidad y automatización repetible. Dimensionar el variador según el perfil de movimiento completo.'
    },
    specs: {
      en: ['Example power classes: 400 W / 750 W / 1.5 kW', 'Feedback option: absolute encoder', 'Network options: EtherCAT or pulse control', 'Verify: continuous torque, peak duty and load inertia'],
      zh: ['功率等级示例：400 W / 750 W / 1.5 kW', '反馈选项：绝对式编码器', '网络选项：EtherCAT 或脉冲控制', '需核实：连续转矩、峰值工况与负载惯量'],
      pt: ['Classes de potência de exemplo: 400 W / 750 W / 1,5 kW', 'Opção de feedback: encoder absoluto', 'Opções de rede: EtherCAT ou controle por pulso', 'Verifique: torque contínuo, regime de pico e inércia da carga'],
      es: ['Clases de potencia de ejemplo: 400 W / 750 W / 1,5 kW', 'Opción de realimentación: encoder absoluto', 'Opciones de red: EtherCAT o control por pulsos', 'Verifique: par continuo, régimen pico e inercia de la carga']
    },
    value: {
      en: 'A correctly sized matched drive and motor can reduce commissioning time. Compare installed system cost, including cables, tuning and service support.',
      zh: '正确选型的配套驱动与电机可缩短调试时间。比较包括电缆、调试与服务支持在内的系统落地成本。',
      pt: 'Um driver e motor casados e dimensionados corretamente podem reduzir o tempo de comissionamento. Compare o custo do sistema instalado, incluindo cabos, ajuste e suporte técnico.',
      es: 'Un variador y motor emparejados y correctamente dimensionados pueden reducir el tiempo de puesta en marcha. Compare el costo del sistema instalado, incluidos cables, ajuste y soporte técnico.'
    }
  },
  {
    name: { en: 'Rechargeable Lithium-Ion Battery Packs', zh: '可充电锂离子电池组', pt: 'Pacotes de Baterias de Íons de Lítio Recarregáveis', es: 'Paquetes de Baterías de Iones de Litio Recargables' },
    category: 'Energy',
    description: {
      en: 'Application-specific energy storage for portable electronics and equipment. Select chemistry and pack architecture around power demand, temperature and expected life.',
      zh: '面向便携电子与设备的专用储能。根据功率需求、温度与预期寿命选择电化学体系与电池包架构。',
      pt: 'Armazenamento de energia específico para aplicação em eletrônicos e equipamentos portáteis. Selecione a química e a arquitetura do pacote conforme demanda de potência, temperatura e vida útil esperada.',
      es: 'Almacenamiento de energía según la aplicación para electrónica y equipos portátiles. Seleccione la química y la arquitectura del paquete según la demanda de potencia, la temperatura y la vida útil esperada.'
    },
    specs: {
      en: ['Example nominal cell voltages: 3.6 / 3.7 V, chemistry dependent', 'Specify: pack voltage, Wh and continuous discharge current', 'Protection: overcharge, overdischarge, temperature and short circuit', 'Request: cell traceability and applicable transport test documents'],
      zh: ['电芯标称电压示例：3.6 / 3.7 V，视电化学体系而定', '需指定：电池组电压、瓦时与持续放电电流', '保护：过充、过放、温度与短路', '需索取：电芯可追溯性与适用的运输测试文件'],
      pt: ['Tensões nominais de célula de exemplo: 3,6 / 3,7 V, conforme a química', 'Especifique: tensão do pacote, Wh e corrente de descarga contínua', 'Proteção: sobrecarga, sobredescarga, temperatura e curto-circuito', 'Solicite: rastreabilidade da célula e documentos de teste de transporte aplicáveis'],
      es: ['Tensiones nominales de celda de ejemplo: 3,6 / 3,7 V, según la química', 'Especifique: tensión del paquete, Wh y corriente de descarga continua', 'Protección: sobrecarga, sobredescarga, temperatura y cortocircuito', 'Solicite: trazabilidad de celda y documentos de prueba de transporte aplicables']
    },
    value: {
      en: 'Compare usable energy and replacement frequency. A traceable cell supply and suitable protection can be worth more than a larger advertised capacity.',
      zh: '比较可用电量与更换频率。可追溯的电芯供应与合适保护，其价值可能高于更大的标称容量。',
      pt: 'Compare energia útil e frequência de substituição. Um fornecimento de célula rastreável e proteção adequada podem valer mais do que uma capacidade anunciada maior.',
      es: 'Compare energía útil y frecuencia de reemplazo. Un suministro de celda trazable y una protección adecuada pueden valer más que una mayor capacidad anunciada.'
    }
  },
  {
    name: { en: 'High-Efficiency N-Type Solar Modules', zh: '高效N型太阳能组件', pt: 'Módulos Solares Tipo N de Alta Eficiência', es: 'Módulos Solares Tipo N de Alta Eficiencia' },
    category: 'Energy',
    description: {
      en: 'Photovoltaic modules for rooftop and ground-mounted systems. High module efficiency helps make better use of limited installation area.',
      zh: '用于屋顶与地面式系统的光伏组件。高组件效率有助于更充分利用有限的安装面积。',
      pt: 'Módulos fotovoltaicos para sistemas em telhados e montados no solo. A alta eficiência do módulo ajuda a aproveitar melhor a área de instalação limitada.',
      es: 'Módulos fotovoltaicos para sistemas en tejados y montados en suelo. La alta eficiencia del módulo ayuda a aprovechar mejor el área de instalación limitada.'
    },
    specs: {
      en: ['Technology option: N-type TOPCon', 'Example module-efficiency target: 23% or above at STC', 'Compare: temperature coefficient and annual degradation terms', 'Verify: module dimensions, loading and inverter compatibility'],
      zh: ['技术选项：N 型 TOPCon', '组件效率目标示例：STC 条件下 23% 及以上', '需比较：温度系数与年衰减条款', '需核实：组件尺寸、载荷与逆变器兼容性'],
      pt: ['Opção de tecnologia: TOPCon tipo N', 'Meta de eficiência de módulo de exemplo: 23% ou mais em STC', 'Compare: coeficiente de temperatura e termos de degradação anual', 'Verifique: dimensões do módulo, carga e compatibilidade com inversor'],
      es: ['Opción de tecnología: TOPCon tipo N', 'Objetivo de eficiencia de módulo de ejemplo: 23 % o más en STC', 'Compare: coeficiente de temperatura y términos de degradación anual', 'Verifique: dimensiones del módulo, carga y compatibilidad con inversor']
    },
    value: {
      en: 'Evaluate cost per installed watt and modeled lifetime energy yield. Higher efficiency is most valuable where roof space or mounting costs constrain the project.',
      zh: '评估每安装瓦特成本与建模的终身发电量。在屋顶空间或安装成本受限的项目中，高效率最具价值。',
      pt: 'Avalie o custo por watt instalado e a produção de energia modelada ao longo da vida útil. Maior eficiência é mais valiosa onde o espaço no telhado ou os custos de montagem limitam o projeto.',
      es: 'Evalúe el costo por vatio instalado y la producción energética modelada a lo largo de la vida útil. Una mayor eficiencia es más valiosa cuando el espacio en el tejado o los costos de montaje limitan el proyecto.'
    }
  },
  {
    name: { en: 'Hybrid Solar Inverters', zh: '混合式光伏逆变器', pt: 'Inversores Solares Híbridos', es: 'Inversores Solares Híbridos' },
    category: 'Energy',
    description: {
      en: 'Coordinate solar generation, battery storage and grid interaction. Choose a topology suited to the site and local utility requirements.',
      zh: '协调光伏发电、电池储能与电网互动。选择适合现场与当地电网要求的拓扑。',
      pt: 'Coordenam geração solar, armazenamento em bateria e interação com a rede. Escolha uma topologia adequada ao local e aos requisitos da concessionária local.',
      es: 'Coordinan la generación solar, el almacenamiento en batería y la interacción con la red. Elija una topología adecuada al sitio y a los requisitos de la empresa local.'
    },
    specs: {
      en: ['Example residential power classes: 5 / 8 / 10 kW', 'Feature option: multiple independent MPPT inputs', 'Specify: battery voltage, PV voltage window and backup output', 'Verify: local grid approval and backup transfer behavior'],
      zh: ['住宅功率等级示例：5 / 8 / 10 kW', '功能选项：多路独立 MPPT 输入', '需指定：电池电压、光伏电压窗口与备用输出', '需核实：当地电网准入与备用切换行为'],
      pt: ['Classes de potência residencial de exemplo: 5 / 8 / 10 kW', 'Opção de recurso: múltiplas entradas MPPT independentes', 'Especifique: tensão da bateria, janela de tensão PV e saída de backup', 'Verifique: aprovação da rede local e comportamento de transferência do backup'],
      es: ['Clases de potencia residencial de ejemplo: 5 / 8 / 10 kW', 'Opción de función: múltiples entradas MPPT independientes', 'Especifique: tensión de batería, ventana de tensión PV y salida de respaldo', 'Verifique: aprobación de la red local y comportamiento de transferencia del respaldo']
    },
    value: {
      en: 'Compare weighted conversion efficiency, service coverage and battery compatibility. A well-matched inverter reduces integration cost and avoidable energy losses.',
      zh: '比较加权转换效率、服务覆盖与电池兼容性。匹配良好的逆变器可降低集成成本与可避免的能量损失。',
      pt: 'Compare eficiência de conversão ponderada, cobertura de serviço e compatibilidade de bateria. Um inversor bem pareado reduz o custo de integração e perdas de energia evitáveis.',
      es: 'Compare eficiencia de conversión ponderada, cobertura de servicio y compatibilidad de batería. Un inversor bien emparejado reduce el costo de integración y las pérdidas de energía evitables.'
    }
  },
  {
    name: { en: 'LiFePO4 Portable Power Stations', zh: '磷酸铁锂便携式储能电源', pt: 'Estações de Energia Portáteis LiFePO4', es: 'Estaciones de Energía Portátiles LiFePO4' },
    category: 'Energy',
    description: {
      en: 'Portable AC and DC power for camping, mobile work and backup essentials. Distinguish continuous output from short-duration surge capability.',
      zh: '为露营、移动作业与备用需求提供便携式交直流电源。注意区分持续输出与短时浪涌能力。',
      pt: 'Energia CA e CC portátil para camping, trabalho móvel e itens essenciais de backup. Distinga a saída contínua da capacidade de surto de curta duração.',
      es: 'Energía CA y CC portátil para camping, trabajo móvil y respaldo esencial. Distinga la salida continua de la capacidad de sobretensión de corta duración.'
    },
    specs: {
      en: ['Example capacity: 1–2 kWh', 'Example continuous AC output: 1–2 kW', 'Output option: pure sine wave; input option: solar MPPT', 'Verify: usable AC energy, fan noise and cycle-test conditions'],
      zh: ['容量示例：1–2 kWh', '持续交流输出示例：1–2 kW', '输出选项：纯正弦波；输入选项：太阳能 MPPT', '需核实：可用交流电量、风扇噪声与循环测试条件'],
      pt: ['Capacidade de exemplo: 1–2 kWh', 'Saída CA contínua de exemplo: 1–2 kW', 'Opção de saída: onda senoidal pura; opção de entrada: MPPT solar', 'Verifique: energia CA útil, ruído do ventilador e condições de teste de ciclo'],
      es: ['Capacidad de ejemplo: 1–2 kWh', 'Salida CA continua de ejemplo: 1–2 kW', 'Opción de salida: onda senoidal pura; opción de entrada: MPPT solar', 'Verifique: energía CA útil, ruido del ventilador y condiciones de prueba de ciclos']
    },
    value: {
      en: 'Compare delivered AC watt-hours per purchase cost. Right-size capacity to the load and duration instead of paying for an oversized unit.',
      zh: '比较每购买成本对应的交流瓦时数。按负载与时长合理选定容量，而非为大而不必的机器买单。',
      pt: 'Compare os watts-hora CA entregues por custo de compra. Dimensione a capacidade para a carga e a duração em vez de pagar por uma unidade superdimensionada.',
      es: 'Compare los vatios-hora CA entregados por costo de compra. Dimensione la capacidad según la carga y la duración en lugar de pagar por una unidad sobredimensionada.'
    }
  },
  {
    name: { en: 'Smart AC EV Charging Stations', zh: '智能交流电动汽车充电桩', pt: 'Estações de Carregamento CA Inteligentes para VE', es: 'Estaciones de Carga CA Inteligentes para VE' },
    category: 'Energy',
    description: {
      en: 'AC charging equipment for homes and workplaces. Charging speed depends on the vehicle onboard charger and available electrical supply.',
      zh: '面向家庭与工作场所的交流充电设备。充电速度取决于车辆车载充电器与可用供电。',
      pt: 'Equipamento de carregamento CA para residências e locais de trabalho. A velocidade de carregamento depende do carregador de bordo do veículo e da alimentação elétrica disponível.',
      es: 'Equipo de carga CA para hogares y lugares de trabajo. La velocidad de carga depende del cargador de a bordo del vehículo y del suministro eléctrico disponible.'
    },
    specs: {
      en: ['Example ratings: 7.4 kW single phase / 11 or 22 kW three phase', 'Connector: select for vehicle and destination market', 'Feature options: load balancing, RFID and OCPP', 'Verify: residual-current protection and installation requirements'],
      zh: ['额定功率示例：单相 7.4 kW / 三相 11 或 22 kW', '连接器：按车辆与目标市场选择', '功能选项：负载均衡、RFID 与 OCPP', '需核实：剩余电流保护与安装要求'],
      pt: ['Classificações de exemplo: 7,4 kW monofásico / 11 ou 22 kW trifásico', 'Conector: selecione para o veículo e o mercado de destino', 'Opções de recurso: balanceamento de carga, RFID e OCPP', 'Verifique: proteção de corrente residual e requisitos de instalação'],
      es: ['Potencias de ejemplo: 7,4 kW monofásico / 11 o 22 kW trifásico', 'Conector: seleccione para el vehículo y el mercado de destino', 'Opciones de función: equilibrado de carga, RFID y OCPP', 'Verifique: protección de corriente residual y requisitos de instalación']
    },
    value: {
      en: 'Compare equipment plus installation and energy-management costs. Dynamic load balancing may avoid unnecessary supply upgrades when the site supports it.',
      zh: '比较设备、安装与能源管理成本。现场条件支持时，动态负载均衡可避免不必要的供电增容。',
      pt: 'Compare equipamento mais custos de instalação e gerenciamento de energia. O balanceamento dinâmico de carga pode evitar upgrades desnecessários de fornecimento quando o local suportar.',
      es: 'Compare el equipo más los costos de instalación y gestión de energía. El equilibrado dinámico de carga puede evitar mejoras de suministro innecesarias cuando el sitio lo permita.'
    }
  },
  {
    name: { en: 'LiFePO4 Energy Storage Battery Packs', zh: '磷酸铁锂储能电池组', pt: 'Pacotes de Baterias LiFePO4 para Armazenamento', es: 'Paquetes de Baterías LiFePO4 para Almacenamiento' },
    category: 'Energy',
    description: {
      en: 'Battery modules for compatible stationary storage systems. Match battery management, inverter communication and usable capacity before purchase.',
      zh: '面向兼容固定式储能系统的电池模块。购买前应匹配电池管理、逆变器通信与可用容量。',
      pt: 'Módulos de bateria para sistemas de armazenamento estacionário compatíveis. Antes de comprar, combine gerenciamento de bateria, comunicação com inversor e capacidade útil.',
      es: 'Módulos de batería para sistemas de almacenamiento estacionario compatibles. Antes de comprar, haga coincidir la gestión de batería, la comunicación con inversor y la capacidad útil.'
    },
    specs: {
      en: ['Example configuration: 51.2 V, 100 Ah, 5.12 kWh nominal', 'Communication options: CAN / RS485', 'Specify: usable depth of discharge and continuous current', 'Request: cycle life with temperature, C-rate and end-of-life criteria'],
      zh: ['配置示例：标称 51.2 V，100 Ah，5.12 kWh', '通信选项：CAN / RS485', '需指定：可用放电深度与持续电流', '需索取：含温度、倍率与寿命终止标准的循环寿命'],
      pt: ['Configuração de exemplo: 51,2 V, 100 Ah, 5,12 kWh nominais', 'Opções de comunicação: CAN / RS485', 'Especifique: profundidade de descarga útil e corrente contínua', 'Solicite: vida útil em ciclos com critérios de temperatura, taxa C e fim de vida'],
      es: ['Configuración de ejemplo: 51,2 V, 100 Ah, 5,12 kWh nominales', 'Opciones de comunicación: CAN / RS485', 'Especifique: profundidad de descarga útil y corriente continua', 'Solicite: vida útil en ciclos con criterios de temperatura, tasa C y fin de vida']
    },
    value: {
      en: 'Compare warranted usable energy throughput and local service. A higher cycle-life claim only adds value when its test conditions match the intended use.',
      zh: '比较质保的可用能量吞吐量与本地服务。只有测试条件与实际用途相符时，更高的循环寿命宣称才有价值。',
      pt: 'Compare o fluxo de energia útil garantido e o serviço local. Uma alegação de maior vida útil em ciclos só agrega valor quando suas condições de teste correspondem ao uso pretendido.',
      es: 'Compare el rendimiento energético útil garantizado y el servicio local. Una mayor vida útil en ciclos solo aporta valor cuando sus condiciones de prueba coinciden con el uso previsto.'
    }
  },
  {
    name: { en: 'Multilayer Printed Circuit Boards', zh: '多层印刷电路板', pt: 'Placas de Circuito Impresso Multicamadas', es: 'Placas de Circuito Impreso Multicapa' },
    category: 'Electronics',
    description: {
      en: 'Custom bare boards for industrial controls and electronics. Build quality depends on the stack-up, material, impedance control and inspection plan.',
      zh: '面向工业控制与电子设备的定制裸板。制造质量取决于叠层、材料、阻抗控制与检测方案。',
      pt: 'Placas nuas personalizadas para controles industriais e eletrônica. A qualidade de fabricação depende do empilhamento, material, controle de impedância e plano de inspeção.',
      es: 'Placas desnudas personalizadas para controles industriales y electrónica. La calidad de fabricación depende del apilado, el material, el control de impedancia y el plan de inspección.'
    },
    specs: {
      en: ['Example stack-ups: 4 / 6 / 8 layers', 'Material option: high-Tg FR-4', 'Specify: copper weight, minimum geometry and controlled impedance', 'Request: electrical test and fabrication inspection criteria'],
      zh: ['叠层示例：4 / 6 / 8 层', '材料选项：高 Tg FR-4', '需指定：铜重、最小线宽线距与受控阻抗', '需索取：电性能测试与制造检验标准'],
      pt: ['Empilhamentos de exemplo: 4 / 6 / 8 camadas', 'Opção de material: FR-4 de alto Tg', 'Especifique: peso de cobre, geometria mínima e impedância controlada', 'Solicite: teste elétrico e critérios de inspeção de fabricação'],
      es: ['Apilados de ejemplo: 4 / 6 / 8 capas', 'Opción de material: FR-4 de alto Tg', 'Especifique: peso de cobre, geometría mínima e impedancia controlada', 'Solicite: prueba eléctrica y criterios de inspección de fabricación']
    },
    value: {
      en: 'Use a standard stack-up when possible. Reserve specialized laminates and fine geometry for signals or layouts that actually need them.',
      zh: '尽量采用标准叠层。仅对确有需要的信号或布局，才使用特种板材与细密几何。',
      pt: 'Use um empilhamento padrão quando possível. Reserve laminados especializados e geometria fina para sinais ou layouts que realmente precisem deles.',
      es: 'Use un apilado estándar cuando sea posible. Reserve laminados especializados y geometría fina para señales o diseños que realmente los necesiten.'
    }
  },
  {
    name: { en: 'High-CRI LED Strip Lights', zh: '高显色LED灯带', pt: 'Fitas de LED de Alto IRC', es: 'Tiras LED de Alto IRC' },
    category: 'Electronics',
    description: {
      en: 'Flexible lighting for interiors, cabinets and architectural accents. Evaluate color consistency and heat dissipation alongside brightness.',
      zh: '用于室内、橱柜与建筑点缀的柔性照明。除亮度外，还应评估色彩一致性与散热。',
      pt: 'Iluminação flexível para interiores, armários e detalhes arquitetônicos. Avalie a consistência de cor e a dissipação de calor junto com o brilho.',
      es: 'Iluminación flexible para interiores, armarios y acentos arquitectónicos. Evalúe la consistencia del color y la disipación de calor junto con el brillo.'
    },
    specs: {
      en: ['Example supply: 24 V DC', 'Example color-rendering target: CRI 90 or above', 'Example color temperatures: 2700 / 3000 / 4000 / 6500 K', 'Specify: lumens per meter, watts per meter and required ingress rating'],
      zh: ['供电示例：24 V DC', '显色目标示例：CRI 90 及以上', '色温示例：2700 / 3000 / 4000 / 6500 K', '需指定：每米流明、每米瓦数与所需防护等级'],
      pt: ['Alimentação de exemplo: 24 V CC', 'Meta de reprodução de cor de exemplo: IRC 90 ou mais', 'Temperaturas de cor de exemplo: 2700 / 3000 / 4000 / 6500 K', 'Especifique: lúmens por metro, watts por metro e grau de proteção necessário'],
      es: ['Alimentación de ejemplo: 24 V CC', 'Objetivo de reproducción cromática de ejemplo: IRC 90 o superior', 'Temperaturas de color de ejemplo: 2700 / 3000 / 4000 / 6500 K', 'Especifique: lúmenes por metro, vatios por metro y grado de protección requerido']
    },
    value: {
      en: 'Compare useful light output and color consistency per installed cost, including power supplies, aluminum channels and controls.',
      zh: '比较每安装成本对应的有效光输出与色彩一致性，包括电源、铝槽与控制器。',
      pt: 'Compare a saída de luz útil e a consistência de cor por custo instalado, incluindo fontes de alimentação, perfis de alumínio e controles.',
      es: 'Compare la salida de luz útil y la consistencia del color por costo instalado, incluidas fuentes de alimentación, perfiles de aluminio y controles.'
    }
  },
  {
    name: { en: 'GaN USB-C Power Delivery Chargers', zh: '氮化镓USB-C快充充电器', pt: 'Carregadores GaN USB-C Power Delivery', es: 'Cargadores GaN USB-C Power Delivery' },
    category: 'Electronics',
    description: {
      en: 'Compact chargers for compatible phones, tablets and notebooks. Device negotiation and cable capability determine actual charging power.',
      zh: '面向兼容手机、平板与笔记本的紧凑型充电器。实际充电功率由设备协商与线材能力决定。',
      pt: 'Carregadores compactos para telefones, tablets e notebooks compatíveis. A negociação do dispositivo e a capacidade do cabo determinam a potência real de carregamento.',
      es: 'Cargadores compactos para teléfonos, tabletas y portátiles compatibles. La negociación del dispositivo y la capacidad del cable determinan la potencia de carga real.'
    },
    specs: {
      en: ['Example power classes: 65 / 100 / 140 W', 'Protocol options: USB PD and PPS; EPR for compatible higher-power modes', 'Specify: single-port output and simultaneous-port power sharing', 'Verify: rated cable, thermal behavior and market safety approvals'],
      zh: ['功率等级示例：65 / 100 / 140 W', '协议选项：USB PD 与 PPS；兼容更高功率模式用 EPR', '需指定：单口输出与多口同时供电分配', '需核实：额定线材、热表现与市场安全认证'],
      pt: ['Classes de potência de exemplo: 65 / 100 / 140 W', 'Opções de protocolo: USB PD e PPS; EPR para modos de maior potência compatíveis', 'Especifique: saída em porta única e compartilhamento de potência entre portas simultâneas', 'Verifique: cabo nominal, comportamento térmico e homologações de segurança do mercado'],
      es: ['Clases de potencia de ejemplo: 65 / 100 / 140 W', 'Opciones de protocolo: USB PD y PPS; EPR para modos de mayor potencia compatibles', 'Especifique: salida en puerto único y reparto de potencia entre puertos simultáneos', 'Verifique: cable nominal, comportamiento térmico y homologaciones de seguridad del mercado']
    },
    value: {
      en: 'One properly matched multiport charger may replace several adapters. Compare sustained power and included cables rather than headline total wattage.',
      zh: '一个匹配得当的多口充电器可取代多个适配器。比较持续功率与附赠线材，而非总瓦数的营销数字。',
      pt: 'Um único carregador multiporta bem pareado pode substituir vários adaptadores. Compare potência sustentada e cabos incluídos, em vez do wattage total destacado.',
      es: 'Un solo cargador multipuerto bien emparejado puede reemplazar varios adaptadores. Compare la potencia sostenida y los cables incluidos, en lugar del vataje total anunciado.'
    }
  },
  {
    name: { en: 'Active Noise Cancelling Wireless Earbuds', zh: '主动降噪无线耳机', pt: 'Fones de Ouvido Sem Fio com Cancelamento Ativo de Ruído', es: 'Auriculares Inalámbricos con Cancelación Activa de Ruido' },
    category: 'Electronics',
    description: {
      en: 'Compact audio devices for commuting, calls and everyday listening. Comfort, microphone quality and tuning matter as much as feature counts.',
      zh: '面向通勤、通话与日常聆听的紧凑音频设备。舒适度、麦克风质量与调音与功能数量同等重要。',
      pt: 'Dispositivos de áudio compactos para deslocamento, chamadas e uso diário. Conforto, qualidade do microfone e afinação importam tanto quanto a quantidade de recursos.',
      es: 'Dispositivos de audio compactos para desplazamientos, llamadas y escucha diaria. La comodidad, la calidad del micrófono y el ajuste importan tanto como la cantidad de funciones.'
    },
    specs: {
      en: ['Feature options: ANC, transparency and multipoint', 'Example battery target: at least 6 hours per charge, with test conditions', 'Specify: codec and phone compatibility', 'Compare: ANC-on runtime, call samples and charging-case capacity'],
      zh: ['功能选项：ANC、通透与多点连接', '电池目标示例：单次充电至少 6 小时，附测试条件', '需指定：编解码器与手机兼容性', '需比较：开启 ANC 的续航、通话样音与充电盒容量'],
      pt: ['Opções de recurso: ANC, transparência e multiponto', 'Meta de bateria de exemplo: pelo menos 6 horas por carga, com condições de teste', 'Especifique: codec e compatibilidade com o telefone', 'Compare: autonomia com ANC ativado, amostras de chamada e capacidade do estojo de carregamento'],
      es: ['Opciones de función: ANC, transparencia y multipunto', 'Objetivo de batería de ejemplo: al menos 6 horas por carga, con condiciones de prueba', 'Especifique: códec y compatibilidad con teléfono', 'Compare: autonomía con ANC activado, muestras de llamada y capacidad del estuche de carga']
    },
    value: {
      en: 'Prioritize reliable calls, fit and replaceable ear tips. Compare listening time under the same ANC and volume settings.',
      zh: '优先考虑可靠的通话、佩戴与可更换耳塞。在相同的 ANC 与音量设置下比较聆听时间。',
      pt: 'Priorize chamadas confiáveis, ajuste e ponteiras substituíveis. Compare o tempo de audição sob as mesmas configurações de ANC e volume.',
      es: 'Priorice llamadas fiables, ajuste y almohadillas reemplazables. Compare el tiempo de escucha con la misma configuración de ANC y volumen.'
    }
  },
  {
    name: { en: 'AMOLED GPS Smart Watches', zh: 'AMOLED GPS智能手表', pt: 'Smartwatches GPS AMOLED', es: 'Relojes Inteligentes GPS AMOLED' },
    category: 'Electronics',
    description: {
      en: 'Wearables for activity tracking, notifications and outdoor exercise. Choose a model compatible with the intended phone and activity ecosystem.',
      zh: '用于活动追踪、通知与户外运动的可穿戴设备。选择与目标手机和运动生态兼容的型号。',
      pt: 'Vestíveis para rastreamento de atividades, notificações e exercícios ao ar livre. Escolha um modelo compatível com o telefone e o ecossistema de atividades pretendidos.',
      es: 'Wearables para seguimiento de actividad, notificaciones y ejercicio al aire libre. Elija un modelo compatible con el teléfono y el ecosistema de actividad previstos.'
    },
    specs: {
      en: ['Display option: AMOLED', 'Positioning option: built-in multi-GNSS', 'Specify: GPS runtime separately from typical daily runtime', 'Verify: water-use rating and supported app features'],
      zh: ['显示选项：AMOLED', '定位选项：内置多模 GNSS', '需指定：GPS 续航与日常续航分别标注', '需核实：防水等级与支持的应用功能'],
      pt: ['Opção de tela: AMOLED', 'Opção de posicionamento: multi-GNSS integrado', 'Especifique: autonomia de GPS separada da autonomia diária típica', 'Verifique: classificação de uso com água e recursos de aplicativo suportados'],
      es: ['Opción de pantalla: AMOLED', 'Opción de posicionamiento: multi-GNSS integrado', 'Especifique: autonomía de GPS por separado de la autonomía diaria típica', 'Verifique: clasificación de resistencia al agua y funciones de aplicación compatibles']
    },
    value: {
      en: 'Choose sensors and navigation features you will use. Compare battery life, app support and any subscription fees over the ownership period.',
      zh: '选择你真正会用的传感器与导航功能。比较电池寿命、应用支持及持有期内的订阅费用。',
      pt: 'Escolha sensores e recursos de navegação que você usará. Compare a vida útil da bateria, o suporte a aplicativos e quaisquer taxas de assinatura ao longo do período de uso.',
      es: 'Elija los sensores y funciones de navegación que realmente usará. Compare la duración de la batería, el soporte de aplicaciones y cualquier tarifa de suscripción durante el periodo de uso.'
    }
  },
  {
    name: { en: '4K PoE Security Cameras', zh: '4K PoE安防摄像头', pt: 'Câmeras de Segurança PoE 4K', es: 'Cámaras de Seguridad PoE 4K' },
    category: 'Electronics',
    description: {
      en: 'Network cameras for detailed monitoring with power and data over one Ethernet cable. Match optics and night performance to the scene.',
      zh: '通过单根网线同时供电与传输数据的网络摄像机，用于细节监控。应根据场景匹配光学与夜视性能。',
      pt: 'Câmeras de rede para monitoramento detalhado com energia e dados por um único cabo Ethernet. Combine a óptica e o desempenho noturno com a cena.',
      es: 'Cámaras de red para monitoreo detallado con energía y datos por un solo cable Ethernet. Haga coincidir la óptica y el rendimiento nocturno con la escena.'
    },
    specs: {
      en: ['Example resolution: 3840 × 2160', 'Feature options: H.265, WDR and ONVIF interoperability', 'Specify: sensor size, lens angle and frame rate at full resolution', 'Verify: outdoor rating, recording compatibility and update support'],
      zh: ['分辨率示例：3840 × 2160', '功能选项：H.265、WDR 与 ONVIF 互操作', '需指定：传感器尺寸、镜头角度与满分辨率帧率', '需核实：户外防护等级、录像兼容性与更新支持'],
      pt: ['Resolução de exemplo: 3840 × 2160', 'Opções de recurso: H.265, WDR e interoperabilidade ONVIF', 'Especifique: tamanho do sensor, ângulo da lente e taxa de quadros em resolução total', 'Verifique: classificação para exterior, compatibilidade de gravação e suporte a atualizações'],
      es: ['Resolución de ejemplo: 3840 × 2160', 'Opciones de función: H.265, WDR e interoperabilidad ONVIF', 'Especifique: tamaño del sensor, ángulo de lente y velocidad de fotogramas a resolución completa', 'Verifique: clasificación para exteriores, compatibilidad de grabación y soporte de actualizaciones']
    },
    value: {
      en: 'PoE can simplify cabling. Compare usable night footage, storage demand and support life instead of resolution alone.',
      zh: 'PoE 可简化布线。比较有效夜间影像、存储需求与支持周期，而非仅看分辨率。',
      pt: 'A PoE pode simplificar o cabeamento. Compare imagens noturnas utilizáveis, demanda de armazenamento e vida útil do suporte, em vez da resolução isolada.',
      es: 'PoE puede simplificar el cableado. Compare imágenes nocturnas utilizables, demanda de almacenamiento y vida útil del soporte, en lugar de la resolución por sí sola.'
    }
  },
  {
    name: { en: 'Corrosion-Resistant Stainless Steel Fasteners', zh: '耐腐蚀不锈钢紧固件', pt: 'Fixadores de Aço Inoxidável Resistentes à Corrosão', es: 'Fijaciones de Acero Inoxidable Resistentes a la Corrosión' },
    category: 'Hardware',
    description: {
      en: 'Bolts, nuts and washers for machinery and structures exposed to moisture. Material grade, strength and joint design determine suitability.',
      zh: '用于暴露于潮湿环境的机械与结构的螺栓、螺母与垫圈。材料等级、强度与接头设计决定适用性。',
      pt: 'Parafusos, porcas e arruelas para máquinas e estruturas expostas à umidade. O grau do material, a resistência e o projeto da junta determinam a adequação.',
      es: 'Pernos, tuercas y arandelas para maquinaria y estructuras expuestas a la humedad. El grado del material, la resistencia y el diseño de la junta determinan la idoneidad.'
    },
    specs: {
      en: ['Material options: A2 / A4 stainless steel', 'Example strength classes: A2-70 / A4-80, where specified', 'Specify: thread, length, tolerance and applicable fastener standard', 'Request: material and mechanical-property documentation'],
      zh: ['材料选项：A2 / A4 不锈钢', '强度等级示例：指定时 A2-70 / A4-80', '需指定：螺纹、长度、公差与适用紧固件标准', '需索取：材料与力学性能文件'],
      pt: ['Opções de material: aço inoxidável A2 / A4', 'Classes de resistência de exemplo: A2-70 / A4-80, onde especificado', 'Especifique: rosca, comprimento, tolerância e norma de fixador aplicável', 'Solicite: documentação de material e propriedades mecânicas'],
      es: ['Opciones de material: acero inoxidable A2 / A4', 'Clases de resistencia de ejemplo: A2-70 / A4-80, cuando se especifique', 'Especifique: rosca, longitud, tolerancia y norma de fijación aplicable', 'Solicite: documentación de material y propiedades mecánicas']
    },
    value: {
      en: 'Use the grade suited to the environment. Consistent threads and traceable batches can reduce assembly rework and maintenance.',
      zh: '按环境选用合适等级。一致的螺纹与可追溯批次可减少装配返工与维护。',
      pt: 'Use o grau adequado ao ambiente. Roscas consistentes e lotes rastreáveis podem reduzir retrabalho de montagem e manutenção.',
      es: 'Use el grado adecuado al entorno. Roscas consistentes y lotes trazables pueden reducir el retrabajo de montaje y el mantenimiento.'
    }
  },
  {
    name: { en: 'Brushless Cordless Drill Drivers', zh: '无刷充电式电钻起子', pt: 'Parafusadeiras-Furadeiras Sem Fio Sem Escovas', es: 'Atornilladores-Taladros Inalámbricos Sin Escobillas' },
    category: 'Hardware',
    description: {
      en: 'Cordless drilling and fastening tools for installation and workshop tasks. Select gearing and chuck capacity for the intended materials.',
      zh: '用于安装与车间的无绳钻孔与紧固工具。根据目标材料选择齿轮组与夹头容量。',
      pt: 'Ferramentas de perfuração e fixação sem fio para instalação e oficina. Selecione a engrenagem e a capacidade do mandril para os materiais pretendidos.',
      es: 'Herramientas inalámbricas de taladrado y atornillado para instalación y taller. Seleccione el engranaje y la capacidad del portabrocas según los materiales previstos.'
    },
    specs: {
      en: ['Example platform: 18 V nominal / 20 V max, depending on labeling', 'Chuck option: 13 mm keyless', 'Feature options: brushless motor, two-speed gearbox and clutch', 'Compare: tested hard/soft torque, weight and battery capacity'],
      zh: ['平台示例：标称 18 V / 最大 20 V，视标注而定', '夹头选项：13 mm 无匙', '功能选项：无刷电机、双速变速箱与离合器', '需比较：实测硬/软扭矩、重量与电池容量'],
      pt: ['Plataforma de exemplo: 18 V nominal / 20 V máx, conforme a rotulagem', 'Opção de mandril: 13 mm sem chave', 'Opções de recurso: motor sem escovas, caixa de duas marchas e embreagem', 'Compare: torque duro/macio testado, peso e capacidade da bateria'],
      es: ['Plataforma de ejemplo: 18 V nominal / 20 V máx, según etiquetado', 'Opción de portabrocas: 13 mm sin llave', 'Opciones de función: motor sin escobillas, caja de dos velocidades y embrague', 'Compare: par duro/suave probado, peso y capacidad de batería']
    },
    value: {
      en: 'A shared battery platform can lower the cost of additional tools. Compare the complete kit, warranty and battery replacement cost.',
      zh: '共享电池平台可降低额外工具的成本。比较整套工具、保修与电池更换成本。',
      pt: 'Uma plataforma de bateria compartilhada pode reduzir o custo de ferramentas adicionais. Compare o kit completo, a garantia e o custo de substituição da bateria.',
      es: 'Una plataforma de batería compartida puede reducir el costo de herramientas adicionales. Compare el kit completo, la garantía y el costo de reemplazo de la batería.'
    }
  },
  {
    name: { en: 'Precision T-Slot Aluminum Extrusions', zh: '精密T型槽工业铝型材', pt: 'Perfis de Alumínio com Ranhura em T de Precisão', es: 'Perfiles de Aluminio de Ranura en T de Precisión' },
    category: 'Hardware',
    description: {
      en: 'Modular profiles for machine frames, workstations and enclosures. Select section geometry for stiffness and connection strength.',
      zh: '用于机架、工位与机柜的模块化型材。根据刚度与连接强度选择截面几何。',
      pt: 'Perfis modulares para estruturas de máquinas, estações de trabalho e gabinetes. Selecione a geometria da seção para rigidez e resistência da conexão.',
      es: 'Perfiles modulares para bastidores de máquinas, estaciones de trabajo y cerramientos. Seleccione la geometría de la sección para rigidez y resistencia de la conexión.'
    },
    specs: {
      en: ['Example profiles: 2020 / 3030 / 4040 / 4080', 'Material options: 6063 / 6061, with stated temper', 'Finish option: anodized surface', 'Specify: slot compatibility, straightness and section properties'],
      zh: ['型材示例：2020 / 3030 / 4040 / 4080', '材料选项：6063 / 6061，注明状态', '表面选项：阳极氧化', '需指定：槽口兼容性、直线度与截面特性'],
      pt: ['Perfis de exemplo: 2020 / 3030 / 4040 / 4080', 'Opções de material: 6063 / 6061, com têmpera indicada', 'Opção de acabamento: superfície anodizada', 'Especifique: compatibilidade da ranhura, retilineidade e propriedades da seção'],
      es: ['Perfiles de ejemplo: 2020 / 3030 / 4040 / 4080', 'Opciones de material: 6063 / 6061, con temple indicado', 'Opción de acabado: superficie anodizada', 'Especifique: compatibilidad de ranura, rectitud y propiedades de la sección']
    },
    value: {
      en: 'Standard profiles and reusable connectors simplify assembly and future changes. Compare cost per finished frame rather than price per meter alone.',
      zh: '标准型材与可重复使用的连接件可简化装配与后续改动。按成品框架成本而非每米价格比较。',
      pt: 'Perfis padrão e conectores reutilizáveis simplificam a montagem e mudanças futuras. Compare o custo por estrutura acabada, em vez do preço por metro isolado.',
      es: 'Los perfiles estándar y los conectores reutilizables simplifican el montaje y los cambios futuros. Compare el costo por bastidor terminado, en lugar del precio por metro por sí solo.'
    }
  },
  {
    name: { en: 'Variable-Speed Centrifugal Water Pumps', zh: '变频离心水泵', pt: 'Bombas Centrífugas de Água de Velocidade Variável', es: 'Bombas de Agua Centrífugas de Velocidad Variable' },
    category: 'Hardware',
    description: {
      en: 'Fluid-handling equipment for compatible clean-water circulation and pressure boosting. Select the pump at its required flow and head operating point.',
      zh: '用于兼容清水循环与增压的流体输送设备。按所需流量与扬程工作点选型。',
      pt: 'Equipamento de movimentação de fluidos para circulação de água limpa compatível e aumento de pressão. Selecione a bomba no ponto de operação de vazão e altura manométrica exigido.',
      es: 'Equipo de manejo de fluidos para circulación de agua limpia compatible y aumento de presión. Seleccione la bomba en el punto de operación de caudal y altura requerido.'
    },
    specs: {
      en: ['Specify: duty flow in m³/h and head in meters', 'Feature option: variable-frequency speed control', 'Specify: wetted materials, seal type and fluid temperature', 'Request: pump curve, efficiency curve and NPSH requirement'],
      zh: ['需指定：工况流量 m³/h 与扬程 m', '功能选项：变频调速', '需指定：过流材料、密封类型与流体温度', '需索取：泵曲线、效率曲线与 NPSH 要求'],
      pt: ['Especifique: vazão de serviço em m³/h e altura manométrica em metros', 'Opção de recurso: controle de velocidade por frequência variável', 'Especifique: materiais molhados, tipo de selo e temperatura do fluido', 'Solicite: curva da bomba, curva de eficiência e requisito de NPSH'],
      es: ['Especifique: caudal de trabajo en m³/h y altura en metros', 'Opción de función: control de velocidad por frecuencia variable', 'Especifique: materiales húmedos, tipo de sello y temperatura del fluido', 'Solicite: curva de bomba, curva de eficiencia y requisito de NPSH']
    },
    value: {
      en: 'A pump selected near its efficient operating region can lower energy cost. Compare lifecycle power use, seals and service access.',
      zh: '在高效工作区附近选泵可降低能耗成本。比较全生命周期的用电、密封与服务可达性。',
      pt: 'Uma bomba selecionada perto de sua região operacional eficiente pode reduzir o custo de energia. Compare o consumo de energia do ciclo de vida, selos e acesso ao serviço.',
      es: 'Una bomba seleccionada cerca de su región operativa eficiente puede reducir el costo energético. Compare el consumo de energía del ciclo de vida, los sellos y el acceso al servicio.'
    }
  },
  {
    name: { en: 'Compact Pneumatic Air Cylinders', zh: '紧凑型气动气缸', pt: 'Cilindros Pneumáticos Compactos', es: 'Cilindros Neumáticos Compactos' },
    category: 'Hardware',
    description: {
      en: 'Compressed-air actuators for clamping, transfer and factory automation. Size bore and stroke around force, speed and installation space.',
      zh: '用于夹紧、移送与工厂自动化的压缩空气执行器。根据力、速度与安装空间选择缸径与行程。',
      pt: 'Atuadores a ar comprimido para fixação, transferência e automação fabril. Dimensione o furo e o curso em torno de força, velocidade e espaço de instalação.',
      es: 'Actuadores de aire comprimido para sujeción, transferencia y automatización de fábrica. Dimensione el diámetro y la carrera según fuerza, velocidad y espacio de instalación.'
    },
    specs: {
      en: ['Example bores: 16–63 mm', 'Example supply range to specify: 0.1–0.7 MPa, model dependent', 'Options: magnetic piston, cushioning and sensor slots', 'Verify: force at working pressure, side-load limits and air quality'],
      zh: ['缸径示例：16–63 mm', '供气范围示例（需指定）：0.1–0.7 MPa，视型号而定', '选项：磁性活塞、缓冲与传感器槽', '需核实：工作压力下的力、侧向载荷限制与气源质量'],
      pt: ['Furos de exemplo: 16–63 mm', 'Faixa de alimentação de exemplo a especificar: 0,1–0,7 MPa, conforme o modelo', 'Opções: pistão magnético, amortecimento e ranhuras para sensor', 'Verifique: força na pressão de trabalho, limites de carga lateral e qualidade do ar'],
      es: ['Diámetros de ejemplo: 16–63 mm', 'Rango de alimentación de ejemplo a especificar: 0,1–0,7 MPa, según el modelo', 'Opciones: pistón magnético, amortiguación y ranuras para sensor', 'Verifique: fuerza a presión de trabajo, límites de carga lateral y calidad del aire']
    },
    value: {
      en: 'Avoid oversizing bore and stroke to limit air consumption. Standard mounting patterns and seal availability reduce replacement cost.',
      zh: '避免缸径与行程过大以限制耗气量。标准安装型式与密封可得性可降低更换成本。',
      pt: 'Evite superdimensionar o furo e o curso para limitar o consumo de ar. Padrões de montagem comuns e disponibilidade de vedações reduzem o custo de substituição.',
      es: 'Evite sobredimensionar el diámetro y la carrera para limitar el consumo de aire. Los patrones de montaje estándar y la disponibilidad de sellos reducen el costo de reemplazo.'
    }
  },
  {
    name: { en: 'Industrial Diamond Cutting Blades', zh: '工业金刚石切割锯片', pt: 'Discos de Corte Diamantados Industriais', es: 'Discos de Corte Diamantados Industriales' },
    category: 'Hardware',
    description: {
      en: 'Diamond tooling for compatible masonry, tile or stone. Match bond, segment design and cooling method to the material and machine.',
      zh: '用于兼容的砌体、瓷砖或石材的金刚石刀具。按材料与机器匹配结合剂、节块设计与冷却方式。',
      pt: 'Ferramentas diamantadas para alvenaria, azulejo ou pedra compatíveis. Combine liga, design de segmento e método de resfriamento com o material e a máquina.',
      es: 'Herramientas diamantadas para mampostería, azulejo o piedra compatibles. Haga coincidir la liga, el diseño del segmento y el método de enfriamiento con el material y la máquina.'
    },
    specs: {
      en: ['Example diameters: 115 / 125 / 230 / 350 mm', 'Specify: exact arbor and machine compatibility', 'Design options: continuous rim, turbo or segmented', 'Verify: blade-marked maximum rpm and wet/dry use'],
      zh: ['直径示例：115 / 125 / 230 / 350 mm', '需指定：准确轴孔与机器兼容性', '设计选项：连续缘、涡轮或节块', '需核实：刀片标注最大转速与干/湿使用'],
      pt: ['Diâmetros de exemplo: 115 / 125 / 230 / 350 mm', 'Especifique: furo exato e compatibilidade com a máquina', 'Opções de design: borda contínua, turbo ou segmentada', 'Verifique: rpm máximo marcado na lâmina e uso úmido/seco'],
      es: ['Diámetros de ejemplo: 115 / 125 / 230 / 350 mm', 'Especifique: diámetro de eje exacto y compatibilidad con la máquina', 'Opciones de diseño: borde continuo, turbo o segmentado', 'Verifique: rpm máximo marcado en el disco y uso húmedo/seco']
    },
    value: {
      en: 'Compare cost per acceptable cut, edge quality and usable life. A material-specific blade can reduce chipping and wasted workpieces.',
      zh: '比较每次合格切割的成本、边缘质量与可用寿命。针对材料的刀片可减少崩边与废件。',
      pt: 'Compare o custo por corte aceitável, qualidade da borda e vida útil. Uma lâmina específica para o material pode reduzir lascas e peças desperdiçadas.',
      es: 'Compare el costo por corte aceptable, la calidad del borde y la vida útil. Un disco específico para el material puede reducir el astillado y las piezas desperdiciadas.'
    }
  },
  {
    name: { en: 'Vacuum-Insulated Stainless Steel Bottles', zh: '真空不锈钢保温水壶', pt: 'Garrafas de Aço Inoxidável com Isolamento a Vácuo', es: 'Botellas de Acero Inoxidable con Aislamiento al Vacío' },
    category: 'Lifestyle',
    description: {
      en: 'Reusable drink containers for commuting, work and outdoor use. Lid design, cleaning access and finish durability shape daily usability.',
      zh: '用于通勤、工作与户外的可重复使用饮水容器。杯盖设计、清洗便利性与表面耐用性影响日常体验。',
      pt: 'Recipientes reutilizáveis para deslocamento, trabalho e uso ao ar livre. O design da tampa, o acesso para limpeza e a durabilidade do acabamento moldam a usabilidade diária.',
      es: 'Recipientes reutilizables para desplazamientos, trabajo y uso al aire libre. El diseño de la tapa, el acceso para limpieza y la durabilidad del acabado determinan la usabilidad diaria.'
    },
    specs: {
      en: ['Example capacities: 500 / 750 / 1000 mL', 'Construction option: double-wall vacuum insulation', 'Material option: 304 stainless steel inner wall', 'Request: leak tests, food-contact documentation and thermal test conditions'],
      zh: ['容量示例：500 / 750 / 1000 mL', '结构选项：双层真空隔热', '材料选项：304 不锈钢内壁', '需索取：渗漏测试、食品接触文件与保温测试条件'],
      pt: ['Capacidades de exemplo: 500 / 750 / 1000 mL', 'Opção de construção: isolamento a vácuo de parede dupla', 'Opção de material: parede interna de aço inoxidável 304', 'Solicite: testes de vazamento, documentação de contato com alimentos e condições de teste térmico'],
      es: ['Capacidades de ejemplo: 500 / 750 / 1000 mL', 'Opción de construcción: aislamiento al vacío de doble pared', 'Opción de material: pared interior de acero inoxidable 304', 'Solicite: pruebas de fugas, documentación de contacto con alimentos y condiciones de prueba térmica']
    },
    value: {
      en: 'Prioritize durable seals and replaceable lids. Compare heat retention under equal fill volume, starting temperature and ambient conditions.',
      zh: '优先考虑耐用的密封件与可更换杯盖。在相同注水量、起始温度与环境条件下比较保温性。',
      pt: 'Priorize vedações duráveis e tampas substituíveis. Compare a retenção de calor sob igual volume de enchimento, temperatura inicial e condições ambientes.',
      es: 'Priorice sellos duraderos y tapas reemplazables. Compare la retención de calor bajo el mismo volumen de llenado, temperatura inicial y condiciones ambientales.'
    }
  },
  {
    name: { en: 'LiDAR Robot Vacuum and Mop Systems', zh: '激光导航扫拖机器人', pt: 'Sistemas de Robô Aspirador e Esfregão com LiDAR', es: 'Sistemas de Robot Aspirador y Fregona con LiDAR' },
    category: 'Lifestyle',
    description: {
      en: 'Automated floor-cleaning systems for compatible home layouts. Navigation, brush design and maintenance convenience determine practical cleaning results.',
      zh: '面向兼容户型布局的自动地面清洁系统。导航、滚刷设计与维护便利性决定实际清洁效果。',
      pt: 'Sistemas automatizados de limpeza de piso para layouts domésticos compatíveis. A navegação, o design da escova e a conveniência de manutenção determinam os resultados práticos de limpeza.',
      es: 'Sistemas automatizados de limpieza de suelos para distribuciones domésticas compatibles. La navegación, el diseño del cepillo y la comodidad de mantenimiento determinan los resultados prácticos de limpieza.'
    },
    specs: {
      en: ['Navigation option: LiDAR mapping and room scheduling', 'Dock options: dust emptying and mop washing', 'Specify: threshold crossing, body height and carpet behavior', 'Compare: debris pickup tests, obstacle handling and consumable availability'],
      zh: ['导航选项：LiDAR 建图与房间计划', '底座选项：尘盒自动清空与拖布自清洁', '需指定：越障高度、机身高度与地毯行为', '需比较：集尘测试、避障处理与耗材可得性'],
      pt: ['Opção de navegação: mapeamento LiDAR e programação por cômodo', 'Opções de base: esvaziamento de poeira e lavagem do esfregão', 'Especifique: passagem de soleira, altura do corpo e comportamento em carpete', 'Compare: testes de coleta de detritos, tratamento de obstáculos e disponibilidade de consumíveis'],
      es: ['Opción de navegación: mapeo LiDAR y programación por habitación', 'Opciones de base: vaciado de polvo y lavado de mopa', 'Especifique: paso de umbral, altura del cuerpo y comportamiento en alfombra', 'Compare: pruebas de recogida de residuos, manejo de obstáculos y disponibilidad de consumibles']
    },
    value: {
      en: 'Measure cleaning performance and maintenance effort. Include bags, brushes, filters and replacement batteries in the ownership budget.',
      zh: '衡量清洁性能与维护工作量。持有成本中应包含尘袋、滚刷、滤网与备用电池。',
      pt: 'Meça o desempenho de limpeza e o esforço de manutenção. Inclua sacos, escovas, filtros e baterias de reposição no orçamento de posse.',
      es: 'Mida el rendimiento de limpieza y el esfuerzo de mantenimiento. Incluya bolsas, cepillos, filtros y baterías de repuesto en el presupuesto de propiedad.'
    }
  },
  {
    name: { en: 'Digital Dual-Zone Air Fryers', zh: '数显双区空气炸锅', pt: 'Fritadeiras de Ar Digitais de Dupla Zona', es: 'Freidoras de Aire Digitales de Doble Zona' },
    category: 'Lifestyle',
    description: {
      en: 'Countertop convection appliances for preparing separate dishes with independent cooking zones. Usable basket area affects batch size.',
      zh: '用于分别烹制多道菜、带独立烹饪区的台面对流电器。可用炸篮面积影响批次大小。',
      pt: 'Eletrodomésticos de convecção de bancada para preparar pratos separados com zonas de cozimento independentes. A área útil da cesta afeta o tamanho do lote.',
      es: 'Electrodomésticos de convección de encimera para preparar platos separados con zonas de cocción independientes. El área útil de la cesta afecta al tamaño del lote.'
    },
    specs: {
      en: ['Example combined basket volume: 8–10 L', 'Feature options: independent temperature and synchronized finish', 'Specify: rated voltage, total input power and temperature range', 'Verify: accessible cleaning surfaces and market electrical approvals'],
      zh: ['总炸篮容积示例：8–10 L', '功能选项：独立温度与同步完成', '需指定：额定电压、总输入功率与温度范围', '需核实：易清洁表面与市场电气认证'],
      pt: ['Volume combinado da cesta de exemplo: 8–10 L', 'Opções de recurso: temperatura independente e finalização sincronizada', 'Especifique: tensão nominal, potência total de entrada e faixa de temperatura', 'Verifique: superfícies de limpeza acessíveis e aprovações elétricas do mercado'],
      es: ['Volumen combinado de la cesta de ejemplo: 8–10 L', 'Opciones de función: temperatura independiente y finalización sincronizada', 'Especifique: tensión nominal, potencia total de entrada y rango de temperatura', 'Verifique: superficies de limpieza accesibles y aprobaciones eléctricas del mercado']
    },
    value: {
      en: 'Compare usable cooking area and meal throughput. A smaller efficient appliance may offer better value than excess capacity for everyday portions.',
      zh: '比较可用烹饪面积与出餐效率。对于日常分量，一台较小的高效电器可能比过大的容量更有价值。',
      pt: 'Compare a área de cozimento útil e o rendimento de refeições. Um eletrodoméstico menor e eficiente pode oferecer melhor valor do que excesso de capacidade para porções diárias.',
      es: 'Compare el área de cocción útil y el rendimiento de comidas. Un electrodoméstico más pequeño y eficiente puede ofrecer mejor valor que el exceso de capacidad para porciones diarias.'
    }
  },
  {
    name: { en: 'Lightweight Waterproof Camping Tents', zh: '轻量防水露营帐篷', pt: 'Barracas de Camping Leves e Impermeáveis', es: 'Tiendas de Camping Ligeras e Impermeables' },
    category: 'Lifestyle',
    description: {
      en: 'Portable shelters for trips matched to the tent season rating and terrain. Ventilation, packed weight and pitching stability affect comfort.',
      zh: '与帐篷季节等级和地形相匹配的便携式庇护所。通风、打包重量与搭建稳定性影响舒适度。',
      pt: 'Abrigos portáteis para viagens, combinados com a classificação de estação da barraca e o terreno. Ventilação, peso embalado e estabilidade de montagem afetam o conforto.',
      es: 'Refugios portátiles para viajes, acordes a la clasificación de estación de la tienda y el terreno. La ventilación, el peso empaquetado y la estabilidad de montaje afectan la comodidad.'
    },
    specs: {
      en: ['Example capacity: 2–3 people; confirm actual floor dimensions', 'Pole option: aluminum alloy', 'Example flysheet target: 3000 mm hydrostatic head with test method', 'Verify: floor waterproofing, taped seams and packed weight'],
      zh: ['容量示例：2–3 人；需确认实际地席尺寸', '撑杆选项：铝合金', '外帐目标示例：3000 mm 静水压头，附测试方法', '需核实：地席防水、压胶接缝与打包重量'],
      pt: ['Capacidade de exemplo: 2–3 pessoas; confirme as dimensões reais do piso', 'Opção de vareta: liga de alumínio', 'Meta de sobreteto de exemplo: 3000 mm de coluna de água, com método de teste', 'Verifique: impermeabilização do piso, costuras seladas e peso embalado'],
      es: ['Capacidad de ejemplo: 2–3 personas; confirme las dimensiones reales del piso', 'Opción de varilla: aleación de aluminio', 'Objetivo de sobretecho de ejemplo: 3000 mm de columna de agua, con método de prueba', 'Verifique: impermeabilización del piso, costuras selladas y peso empaquetado']
    },
    value: {
      en: 'Balance weather suitability against carrying weight. Durable poles and repairable parts can offer better long-term value than the lightest fabric.',
      zh: '在耐候性与携带重量之间取得平衡。耐用的撑杆与可维修部件，其长期价值可能高于最轻的面料。',
      pt: 'Equilibre a adequação ao clima com o peso de transporte. Varetas duráveis e peças reparáveis podem oferecer melhor valor a longo prazo do que o tecido mais leve.',
      es: 'Equilibre la idoneidad climática con el peso de transporte. Las varillas duraderas y las piezas reparables pueden ofrecer mejor valor a largo plazo que el tejido más ligero.'
    }
  },
  {
    name: { en: 'Torque-Sensing Electric Bicycles', zh: '力矩传感电动自行车', pt: 'Bicicletas Elétricas com Sensor de Torque', es: 'Bicicletas Eléctricas con Sensor de Par' },
    category: 'Lifestyle',
    description: {
      en: 'Pedal-assist bicycles for commuting and recreation. Select frame fit, braking and assistance behavior around the rider and route.',
      zh: '用于通勤与休闲的助力自行车。根据骑行者与路线选择车架尺寸、制动与助力特性。',
      pt: 'Bicicletas com assistência ao pedal para deslocamento e lazer. Selecione o ajuste do quadro, a frenagem e o comportamento de assistência em torno do ciclista e da rota.',
      es: 'Bicicletas de asistencia al pedaleo para desplazamientos y recreación. Seleccione el ajuste del cuadro, el frenado y el comportamiento de asistencia según el ciclista y la ruta.'
    },
    specs: {
      en: ['Feature option: torque-sensor pedal assistance', 'Example battery class: 400–700 Wh', 'Brake option: hydraulic disc brakes', 'Specify: legal motor/assist limits, payload and range-test conditions'],
      zh: ['功能选项：力矩传感助力', '电池等级示例：400–700 Wh', '制动选项：液压碟刹', '需指定：法定电机/助力限值、载重与续航测试条件'],
      pt: ['Opção de recurso: assistência ao pedal com sensor de torque', 'Classe de bateria de exemplo: 400–700 Wh', 'Opção de freio: freios a disco hidráulicos', 'Especifique: limites legais de motor/assistência, carga útil e condições de teste de autonomia'],
      es: ['Opción de función: asistencia al pedaleo con sensor de par', 'Clase de batería de ejemplo: 400–700 Wh', 'Opción de freno: frenos de disco hidráulicos', 'Especifique: límites legales de motor/asistencia, carga útil y condiciones de prueba de autonomía']
    },
    value: {
      en: 'Compare battery replacement, service access and real route performance. Purchase range claims only with stated rider weight, terrain and assistance mode.',
      zh: '比较电池更换、服务可达性与实际路线表现。续航宣称仅在注明骑行者体重、地形与助力模式时才有参考价值。',
      pt: 'Compare a substituição da bateria, o acesso ao serviço e o desempenho real em rota. Compre alegações de autonomia apenas com peso do ciclista, terreno e modo de assistência declarados.',
      es: 'Compare el reemplazo de batería, el acceso al servicio y el rendimiento real en ruta. Considere las afirmaciones de autonomía solo con el peso del ciclista, el terreno y el modo de asistencia declarados.'
    }
  },
  {
    name: { en: 'Durable Carry-On Travel Backpacks', zh: '耐用随身旅行背包', pt: 'Mochilas de Viagem de Bordo Duráveis', es: 'Mochilas de Viaje de Cabina Duraderas' },
    category: 'Lifestyle',
    description: {
      en: 'Organized luggage for commuting and short trips. A comfortable harness and accessible compartments help make efficient use of cabin space.',
      zh: '用于通勤与短途出行的有序行李。舒适的背负与易取隔层有助于高效利用舱内空间。',
      pt: 'Bagagem organizada para deslocamento e viagens curtas. Um arnês confortável e compartimentos acessíveis ajudam a aproveitar bem o espaço de cabine.',
      es: 'Equipaje organizado para desplazamientos y viajes cortos. Un arnés cómodo y compartimentos accesibles ayudan a aprovechar bien el espacio de cabina.'
    },
    specs: {
      en: ['Example capacities: 25–40 L', 'Fabric options: 420D / 600D nylon or polyester', 'Specify: external dimensions, empty weight and laptop compartment', 'Verify: airline size limits, zipper quality and seam reinforcement'],
      zh: ['容量示例：25–40 L', '面料选项：420D / 600D 尼龙或涤纶', '需指定：外部尺寸、空包重量与笔记本隔层', '需核实：航空公司尺寸限制、拉链质量与接缝加固'],
      pt: ['Capacidades de exemplo: 25–40 L', 'Opções de tecido: náilon 420D / 600D ou poliéster', 'Especifique: dimensões externas, peso vazio e compartimento para notebook', 'Verifique: limites de tamanho das companhias aéreas, qualidade do zíper e reforço de costura'],
      es: ['Capacidades de ejemplo: 25–40 L', 'Opciones de tejido: nailon 420D / 600D o poliéster', 'Especifique: dimensiones externas, peso vacío y compartimento para portátil', 'Verifique: límites de tamaño de aerolíneas, calidad de cremallera y refuerzo de costuras']
    },
    value: {
      en: 'Prioritize comfort, repairable hardware and useful organization. Compare weight and construction rather than buying capacity that exceeds travel limits.',
      zh: '优先考虑舒适度、可维修的配件与实用收纳。比较重量与做工，而非购买超过旅行限制的容量。',
      pt: 'Priorize conforto, ferragens reparáveis e organização útil. Compare peso e construção em vez de comprar capacidade que exceda os limites de viagem.',
      es: 'Priorice la comodidad, los herrajes reparables y la organización útil. Compare peso y construcción en lugar de comprar capacidad que exceda los límites de viaje.'
    }
  }
];