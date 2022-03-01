package com.kdvhesaplama;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        double tutar,kdv=0.0;
        Scanner inputLine=new Scanner(System.in);
        System.out.println("KDV siz fiyatı giriniz: ");
        tutar=inputLine.nextDouble();


        kdv=tutar <= 1000 ? tutar*0.18 : tutar*0.08;

        System.out.println("KDV'siz Fiyat:"+tutar);
        System.out.println("KDV'li Fiyat:"+ (tutar+kdv));
        System.out.println("KDV Tutarı:"+kdv);

    }
}
