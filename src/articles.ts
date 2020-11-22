import { IArticle } from "./articles.types";

const fakeText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis quam quis nisi ornare, sit amet lacinia ante convallis. Pellentesque varius turpis augue, et hendrerit nisi pellentesque id. Nam mi dolor, posuere vel tristique ac, tempus a justo. Aenean nunc magna, mollis sit amet mauris ut, varius suscipit nisl. Vestibulum nisl elit, pharetra eu faucibus eget, mollis ac dolor. Mauris eu odio turpis. Aliquam maximus erat quis urna feugiat convallis. Vivamus eu fringilla eros. Donec viverra tellus nec libero aliquam, at hendrerit purus blandit. Vestibulum interdum lobortis ante vel maximus. Cras sed urna quam. Fusce imperdiet urna ex, at semper ante tristique quis.

Sed eu pharetra mi. Maecenas volutpat massa ultrices arcu rhoncus porttitor. Pellentesque consectetur finibus felis at consequat. Aenean accumsan magna diam, et tristique metus porttitor et. Sed ut ex auctor, vestibulum dolor sed, pretium justo. Duis ut consectetur nunc. Etiam nec neque nunc. Donec ac arcu ac orci lobortis vestibulum sed id erat. Aliquam vitae odio auctor, euismod ipsum eu, convallis massa. Pellentesque faucibus vestibulum felis quis elementum. Mauris enim massa, consectetur auctor laoreet at, elementum at lorem. Ut venenatis finibus sodales. Integer imperdiet, tellus non hendrerit fringilla, orci libero tristique orci, ac interdum velit felis ac ipsum. Aliquam eget felis et tellus eleifend accumsan. Donec vitae nulla in erat ultrices consectetur ac non est.

Cras euismod a massa id aliquam. Nunc vestibulum, metus a pharetra varius, lacus odio euismod velit, quis varius leo ligula in justo. Suspendisse non rhoncus leo. Morbi aliquam eros ex. Sed id leo eu nunc ornare dapibus at et mauris. Sed rutrum, nunc eu aliquet ultrices, massa nisi tempus ipsum, eu fermentum tortor massa non ipsum. Duis eu gravida justo, imperdiet aliquam enim. Suspendisse nec tempus odio, a molestie tortor. Praesent facilisis malesuada metus, in porta lectus lacinia eu. Nam id massa et est suscipit ultricies. Proin faucibus fermentum lacus, eu placerat magna euismod quis.

Vestibulum sodales turpis sem, nec vehicula urna dictum at. Quisque eget turpis non sem pharetra faucibus. Morbi imperdiet nisi dui, non condimentum ante fermentum vitae. Praesent id dui efficitur, tempor nibh ut, lacinia nisi. Nam urna lacus, porta vel leo nec, rhoncus fermentum est. Vivamus aliquam, quam vel cursus ullamcorper, sapien elit varius eros, non sodales dolor leo at est. Nulla velit lorem, tempus nec pellentesque nec, posuere nec dui. Duis auctor feugiat tortor, non luctus turpis convallis vel. Sed sed sollicitudin mauris, sed porta nunc. Sed scelerisque ut est cursus tempus. Etiam at maximus sapien, eget ornare eros. Donec molestie, odio ut consequat molestie, risus erat posuere nulla, in faucibus lacus sem eu neque. Vivamus porta nibh sed pharetra dapibus.

Ut commodo sed justo vel rutrum. Nullam ut fringilla quam. Aenean non feugiat lorem, ut porta mauris. Sed mollis mollis sollicitudin. Nullam nec risus in sapien volutpat posuere. Phasellus eros velit, interdum a nisi vitae, tristique maximus ipsum. Aliquam tincidunt eu dui ut fringilla. Pellentesque imperdiet ligula non orci scelerisque condimentum ut et sem. Donec non ultrices leo. Etiam nisi arcu, vehicula non turpis et, bibendum egestas mauris. Donec fringilla nunc ut lorem mollis, vel consectetur urna pretium. Fusce at molestie purus.

Maecenas accumsan aliquet mauris, vel porta tortor tincidunt non. In et ligula eu dolor placerat sollicitudin id malesuada tellus. Vivamus condimentum nulla vel dapibus fermentum. Nullam at nisl accumsan, tincidunt diam et, auctor mauris. Aenean nec consectetur nulla. Donec metus lorem, cursus vel purus quis, malesuada consectetur arcu. Sed sodales ipsum ac felis fermentum aliquam. Pellentesque justo risus, pretium ut augue sed, aliquam imperdiet mauris. Quisque rutrum sed lacus eget eleifend.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Duis ultricies consectetur accumsan. Aenean consectetur, ligula a suscipit tincidunt, orci odio iaculis purus, in mollis tellus est vitae erat. Fusce mollis sem condimentum, fringilla elit vel, fringilla urna. Donec in turpis sed purus pretium egestas ut sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas risus id pretium dignissim. Maecenas vulputate orci in neque finibus auctor. Nunc pharetra leo eu tristique facilisis. Nunc consectetur arcu a ante faucibus, ac elementum elit facilisis.

Vestibulum tortor erat, accumsan at massa quis, cursus vestibulum neque. Sed facilisis lacus quis iaculis imperdiet. Aenean porta est nulla, nec feugiat urna iaculis eu. Aliquam in fringilla augue. Duis a fringilla leo, sit amet posuere quam. Nullam auctor tempor enim ac venenatis. Maecenas tempor sodales ullamcorper. Praesent egestas vehicula est eget blandit. Pellentesque lobortis urna in nulla maximus, eu lobortis ante venenatis. Nulla massa lacus, aliquam in ante vel, tristique sollicitudin libero. Phasellus consectetur libero vel tempus lobortis. Sed eget nisl ut mi viverra gravida. Sed non quam nec purus congue suscipit eu aliquet dolor. Donec eros dolor, faucibus at mollis eu, posuere ut arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Vestibulum a elit non massa efficitur laoreet. Aenean non elit lobortis est vulputate porta. Nunc id purus sed lorem blandit dictum. Nullam vel sollicitudin felis. Curabitur quis eros ut dui posuere imperdiet non vel ligula. Etiam vitae orci rutrum, imperdiet nulla eget, suscipit dui. Nullam mollis velit in tempus semper. Maecenas vulputate imperdiet felis in pellentesque. Vestibulum ultricies, est a sagittis dictum, neque mi venenatis massa, vitae blandit nisl risus non diam. Sed ut efficitur mauris. Mauris vitae arcu aliquet, lobortis dolor ac, egestas dui. Nullam lectus massa, iaculis pulvinar turpis eget, dictum consectetur enim. Sed eu ligula pulvinar, iaculis libero ut, venenatis ligula. Curabitur urna enim, imperdiet sed lorem vel, tristique maximus mi.

Proin nibh nulla, porta quis consectetur in, maximus quis elit. Fusce et laoreet erat, eu cursus magna. Integer eu dui nec turpis vestibulum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla non blandit pharetra, sem sem feugiat mi, in vestibulum justo justo vitae est. Proin placerat viverra enim, sed luctus diam tincidunt ut. Cras vitae eros eget ex volutpat ultricies a non libero. Pellentesque pellentesque est ex, quis efficitur diam tempus congue. Donec sit amet mattis leo, ut efficitur elit. Aliquam non suscipit diam.`

export const articles: IArticle[] = [
  {
    id: 1,
    ru: {
      name: 'Как выбрать мастера',
      text: fakeText
    },
    ua: {
      name: 'Как выбрать мастера',
      text: fakeText
    }
  },
  {
    id: 2,
    ru: {
      name: 'Все о ценах на тату',
      text: fakeText
    },
    ua: {
      name: 'Все о ценах на тату',
      text: fakeText
    }
  },
  {
    id: 3,
    ru: {
      name: 'Рандомное название очень длинное хз че писать в принципе не важно или важно??',
      text: fakeText
    },
    ua: {
      name: 'Рандомное название очень длинное хз че писать в принципе не важно или важно??',
      text: fakeText
    }
  },
  {
    id: 4,
    ru: {
      name: 'Рандомное название',
      text: fakeText
    },
    ua: {
      name: 'Рандомное название',
      text: fakeText
    }
  },
];
