let data = [
  {
    titel: "Societal responsibility",
    spørgsmål: [
      {
        info: "44. The organisation offers consulting to its member federations in the areas of management or governance.",
        underspørgsmål: [
          '44.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions to be taken regarding the consulting of its member federations in the areas of management or governance?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '44.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters related to management and/ or governance consulting?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.3 Does the organisation provide some form of consulting to member federations in the areas of management or governance through knowledge transfer?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '44.4 Does this consulting include the organisation of workshops or training sessions?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.5 Does this consulting include tailored (one-on-one) advice?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.6 Does this consulting include the distribution of templates or good practices?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '44.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "45. The organisation implements a policy aimed at mitigating the health risks of sporting activities.",
        underspørgsmål: [
          '45.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at mitigating the health risks of sporting activities?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding the health risks of sporting activities?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '45.3 Does the organisation undertake actions aimed at informing athletes of the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.4 Does the organisation undertake actions aimed at preventing or mitigating the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.5 Did the organisation conduct an analysis of the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "46. The organisation implements a policy on combating sexual harassment in sport.",
        underspørgsmål: [
          '46.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating sexual harassment in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.2 Does the organisation have a code of conduct which outlines rules aimed at promoting the physical integrity of athletes?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.3 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding combating sexual harassment in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.4 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of combating sexual harassment in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.5 Does the organisation promote the exchange of best practices on combating sexual harassment among its member federations?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.6 Does the organisation undertake other actions (not related to the exchange of best practices or cooperation with other organisations) aimed at raising awareness for sexual harassment issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.7 Do the organisation’s statutes and/ or internal regulations establish procedures for processing complaints about unwanted sexual behaviour?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.8 Does the procedure contain rules for submitting complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.9 Does the procedure contain rules for investigating complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.10 Does the procedure contain rules for notifying the person who submitted the complaint about the outcome of the investigation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.11 Does the procedure contain rules for the establishment of an independent tribunal?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.12 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "47. The organisation implements an anti-doping policy.",
        underspørgsmål: [
          '47.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at preventing, detecting, and combating doping practices?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.2 Does the organisation implement disciplinary rules to combat doping in conformity with the World Anti-Doping Code?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.3 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding combating doping in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.4 Does the organisation undertake actions aimed at raising awareness for anti-doping rules?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.5 Does the organisation undertake actions aimed at educating athletes on the dangers of doping use?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.6 Does the organisation implement formal procedures establishing its cooperation with the World Anti-Doping Agency?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '47.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "48. The organisation implements a policy on social inclusion through sport.",
        underspørgsmål: [
          '48.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '48.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding social inclusion through sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '48.3 Does the organisation promote the exchange of best practices on social inclusion among its member federations?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '48.4 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '48.5 Does the organisation provide resources for disability disciplines?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '48.6 Does the organisation undertake other actions aimed at improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#F7941E"> A</SPAN>',
          '48.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "49. The organisation implements a policy combating discrimination in sport.",
        underspørgsmål: [
          '49.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.2 Does the organisation have a code of conduct which outlines rules aimed at combating discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.3 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.4 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of combating discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.5 Does the organisation undertake actions aimed at raising awareness for discrimination issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.6 Do the organisation’s statutes and/ or internal regulations establish procedures for processing complaints about discrimination?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.7 Does the procedure contain rules for submitting complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.8 Does the procedure contain rules for investigating complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.9 Does the procedure contain clearly defined rules for notifying the person who submitted the complaint about the outcome of the investigation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.10 Does the procedure contain rules for the establishment of an independent tribunal?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '49.11 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "50. The organisation implements a policy to promote gender equality in sport.",
        underspørgsmål: [
          '50.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting gender equality in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '50.2 Does the organisation raise awareness via educational materials for all decision makers on the importance of having a diverse representation on decision-making organs throughout the sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '50.3 Does the organisation undertake actions aimed at supporting (future) leaders of both sexes through either formal training or informal arrangements (e.g., mentoring system)?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '50.4 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding gender equality issues?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '50.5 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of promoting gender equality in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '50.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "51. The organisation implements a policy to combat match-fixing.",
        underspørgsmål: [
          '51.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding match-fixing issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.3 Does the organisation implement disciplinary rules to combat match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.4 Do these rules include provisions banning any member of the federation from placing a bet related to youth leagues and a competition or match that he/she may (in)directly influence?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.5 Do these rules include provisions banning any member of the federation from spreading confidential information which may reasonably be expected to be used in the framework of a bet?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.6 Do these rules include provisions establishing the obligation for every member of the federation to report any requests to unduly influence competitions or matches organized by the federation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.7 Do these rules include provisions establishing the procedure for punishing any violations of the above rules?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.8 Does the organisation undertake actions aimed at promoting the exchange of best practices on combatting match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.9 Does the organisation undertake actions to educate elite athletes, promising young athletes, coaches, referees, trainers, and clubs about risks relating to match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '51.10 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "52. The organisation implements a policy for the promotion of environmental sustainability.",
        underspørgsmål: [
          '52.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting environmental sustainability?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding promoting environmental sustainability?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.3 Does the organisation incorporate the use of an environmental management system (ISO 20121 or similar) in its hosting agreement for its major events?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '52.4 Does the organisation formally take environmental criteria into account when evaluating bids to host its major events?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.5 Does the organisation incorporate specific environmental sustabability objectives in the host agreement of its major events?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.6 Does the organisation provide guidance for (potential) hosts on environmental sustainability?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.7 Does the organisation undertake actions aimed at promoting the exchange of best practices on environmental sustainability among its member federations?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.8 Does the organisation undertake other actions aimed at promoting the environmental sustainability of sporting activities?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '52.9 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of promoting the environmental sustainability of sporting activities?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '52.10 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "53. The organisation implements a policy on promoting the dual career of athletes.",
        underspørgsmål: [
          '53.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at helping athletes combine their sporting career with education or work?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '53.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for all matters regarding dual careers?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '53.3 Does the organisation undertake actions aimed at promoting the exchange of best practices on dual careers with its member federations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '53.4 Does the organisation undertake other actions (not related to the exchange of best practices or cooperation with other organisations) aimed at promoting and supporting the inclusion of the concept of dual careers in the activities of its member federations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '53.5 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of helping athletes combine their sporting career with education or work?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '53.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "54. The organisation implements a policy on promoting sport for all.",
        underspørgsmål: [
          '54.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '54.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '54.3 Does the organisation undertake actions aimed at promoting sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '54.4 Does the organisation undertake other actions (not related to the exchange of best practices or cooperation with other organisations) aimed at promoting and supporting sport for all in the activities of its member federations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '54.5 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of promoting sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '54.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "55. The organisation ensures the fair treatment of professional athletes.",
        underspørgsmål: [
          '55.1 Does the organisation implement the use of minimum requirements for standard athlete contracts?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '55.2 Do these minimum requirements include a standard on minimum wages?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '55.3 Do these minimum requirements include a standard on internal disciplinary rules with sanctions/penalties (fines) and the necessary procedures?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '55.4 Do these minimum requirements include a standard on the process for the resolution of disputes not covered by the contract?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '55.5 Does the organisation undertake actions aimed at promoting social dialogue (between athletes and clubs)?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "56. The organisation implements a policy for the promotion and safeguarding of human rights.",
        underspørgsmål: [
          '56.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting and safeguarding human rights?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.2 Does the organisation have a staff member who formally acts as a single point of contact and is responsible for human rights issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.3 Does the organisation undertake actions aimed at promoting and safeguarding human rights?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.4 Does the organisation undertake other actions (not related to the exchange of best practices or cooperation with other organisations) aimed at promoting and safeguarding human rights in the activities of its member federations?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.5 Does the organisation cooperate with other organisations (other than its member organisations or regional federations) with a view of promoting and safeguarding human rights?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.6 Does the organisation formally take human rights criteria into account when evaluating bids to host its major events?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.7 Does the organisation incorporate specific human rights requirements in the host agreement of its major events?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.8 Does the organisation provide guidance for (potential) hosts on human rights issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '56.9 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "57. The organisation requires entities that receive funding to implement anti-corruption controls.",
        underspørgsmål: [
          '57.1 Do the organisation’s statutes and/or internal regulations and/or formal policies require the organisation to determine whether any entity receiving funding has in place anti-corruption controls which manage corruption risks?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '57.2 Do the organisation’s statutes and/or internal regulations and/or formal policies establish that the organisation requires any entity receiving funding to implement anti-corruption controls related to the relevant transaction or project?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '57.3 Do the organisation’s statutes and/or internal regulations and/or formal policies establish that the transaction cannot go ahead in case adequate anti-corruption controls are not in place and the receiving entity refuses to implement these?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }
    ]
  }
];
