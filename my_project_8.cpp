#include <iostream>
#include "math.h"

using namespace std;

int main()
{

	float y, Z, dob = 1;

	cout << "Input y: ";
	cin >> y;

	for (int k = 1; k <= 10; k++)
	{
		dob *= log(k * y);
	}

	Z = y + dob + 2;

	cout << "Z=" << Z;
}