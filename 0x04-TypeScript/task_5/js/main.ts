// MajorCredits interface with a branded property
interface MajorCredits {
  credits: number;
  readonly __brand: 'MajorCredits'; // Branding property for nominal typing
}

// MinorCredits interface with a branded property
interface MinorCredits {
  credits: number;
  readonly __brand: 'MinorCredits'; // Branding property for nominal typing
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}

// USAGE:
// Creating instances of branded types with type assertions
const major1 = { credits: 2 } as MajorCredits;
const major2 = { credits: 3 } as MajorCredits;
const minor1 = { credits: 4 } as MinorCredits;
const minor2 = { credits: 5 } as MinorCredits;

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
