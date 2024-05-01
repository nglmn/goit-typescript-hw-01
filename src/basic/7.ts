type DetailsParam = {
    createAt: object;
    updateAt: object;
}
type PageType = {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: DetailsParam;
}

const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}


console.log('Task  7: ')