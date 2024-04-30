//void
function showMessage(message: string): void {
 console.log(message);
}

//return type
function calc(num1: number, num2: number): number {
 return num1 + num2;
}

//never
function customError(): never {
 throw new Error('Error');
}
