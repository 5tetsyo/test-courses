const defaultBanks = [{
    name: "America First Credit Union",
    id: "1",
    intRate: "10",
    loadTerm: "20",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "Patriot Federal Credit Union",
    id: "2",
    intRate: "10",
    loadTerm: "12",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "LA HEALTHCARE FCU",
    id: "3",
    intRate: "10",
    loadTerm: "24",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "MIDFLORIDA CREDIT UNION",
    id: "4",
    intRate: "10",
    loadTerm: "24",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "Velocity Community Credit Union",
    id: "5",
    intRate: "10",
    loadTerm: "36",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "First Service Federal Credit Union (OH)",
    id: "6",
    intRate: "10",
    loadTerm: "12",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "Lone Star National Bank",
    id: "7",
    intRate: "10",
    loadTerm: "24",
    maxLoan: "123123213123",
    minPay: "10"
},
{
    name: "Jefferson Financial Credit Union",
    id: "8",
    intRate: "10",
    loadTerm: "12",
    maxLoan: "123123213123",
    minPay: "10"
}]

export const localBanks = (banks) => {
        localStorage.setItem(`Bank`, JSON.stringify(defaultBanks));
        if (banks) {
            localStorage.setItem(`Bank`, JSON.stringify(banks));
        };
        return banks;
};
export const addBank = (banks, newBank, setBank) => {
    setBank([...banks, {...newBank, id: banks.length + 1}]);
};

export const calculate = (interestRate, minPay, initialLoad, loadTerm) => {
    if (interestRate && minPay && initialLoad && loadTerm) {
        const load = initialLoad - (initialLoad * minPay/100);
        const monthlyPayment = Math.ceil((load * (interestRate/100/12) * Math.pow((1 + interestRate/100/12), loadTerm)) / (Math.pow((1 + interestRate/100/12), loadTerm) - 1));
        return monthlyPayment;
    }
}