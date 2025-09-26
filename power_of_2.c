#include <stdio.h>
#include <math.h>

int main() {
    int i;
    
    printf("Powers of 2 from 0 to 20:\n");
    printf("========================\n");
    
    for (i = 0; i <= 20; i++) {
        long long result = 1;
        
        // Calculate 2^i using a loop (alternative to pow function)
        for (int j = 0; j < i; j++) {
            result *= 2;
        }
        
        printf("2^%2d = %lld\n", i, result);
    }
    
    return 0;
}
