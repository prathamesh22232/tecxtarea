#include<iostream>
#include<vector>
using namespace std;

int main(){

    int b= 10;
    int *ptr  = &b;
    int **c = &ptr;

    cout<<*(&b)<<endl;
    cout<<*(ptr)<<endl;
    cout<<ptr<<endl;
    cout<<c<<endl;
    cout<<**(c);

    return 0;
}