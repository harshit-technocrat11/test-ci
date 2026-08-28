import os
import sys
from app.calculator import add, multiply

def main():
    print("==============================================")
    print("       Nimbus CI - Python Service Run         ")
    print("==============================================")
    print(f"Python Runtime Version        : {sys.version.split()[0]}")
    print(f"Environment Variables         : APP_ENV={os.getenv('APP_ENV', 'unknown')}, PYTHON_ENV={os.getenv('PYTHON_ENV', 'unknown')}")
    print(f"CI Message                    : {os.getenv('CI_MESSAGE', 'none')}")
    
    result_add = add(15, 27)
    result_mul = multiply(8, 9)
    print(f"Calculation Add(15, 27)       : {result_add}")
    print(f"Calculation Multiply(8, 9)    : {result_mul}")
    print("==============================================")

if __name__ == "__main__":
    main()
