package com.ortalama;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int mat, fiz, kim;
        Scanner input=new Scanner(System.in);
        System.out.println("Matemetik notunu giriniz : ");
        mat=input.nextInt();

        System.out.println("Fizik notunu giriniz : ");
        fiz=input.nextInt();

        System.out.println("Kimya notunu giriniz : ");
        kim=input.nextInt();

        double ort=(fiz+kim+mat)/3;
        System.out.println("Not ortalaması : " + ort);

        System.out.println(ort > 60 ? "Sınıfı Geçti" : "Sınıfta Kaldı");
    }
}
