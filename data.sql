PGDMP     -    4                {            menu    15.2    15.2     >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    16450    menu    DATABASE     x   CREATE DATABASE menu WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE menu;
                postgres    false            /          0    16549 	   food_type 
   TABLE DATA           7   COPY public.food_type (type_id, type_name) FROM stdin;
    public          postgres    false    215   �       1          0    16558    menu 
   TABLE DATA           \   COPY public.menu (product_id, product_name, image, type, product_weight, price) FROM stdin;
    public          postgres    false    217   <       9          0    24913 
   order_list 
   TABLE DATA           j   COPY public.order_list (order_id, list_item, ordered_by, status, date, payment_method, price) FROM stdin;
    public          postgres    false    225   �       7          0    24827    payment_method 
   TABLE DATA           B   COPY public.payment_method (payment_id, payment_name) FROM stdin;
    public          postgres    false    223   �       3          0    16569    role 
   TABLE DATA           -   COPY public.role (id, role_name) FROM stdin;
    public          postgres    false    219   �       5          0    24799    status 
   TABLE DATA           8   COPY public.status (status_id, status_name) FROM stdin;
    public          postgres    false    221   4       ;          0    33041    user 
   TABLE DATA           h   COPY public."user" (id, username, password, role, "createdAt", "updatedAt", "refreshToken") FROM stdin;
    public          postgres    false    227   �       I           0    0    food_type_type_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.food_type_type_id_seq', 4, true);
          public          postgres    false    214            J           0    0    menu_product_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.menu_product_id_seq', 8, true);
          public          postgres    false    216            K           0    0    order_list_order_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.order_list_order_id_seq', 36, true);
          public          postgres    false    224            L           0    0    payment_method_payment_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.payment_method_payment_id_seq', 2, true);
          public          postgres    false    222            M           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 3, true);
          public          postgres    false    218            N           0    0    status_status_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.status_status_id_seq', 4, true);
          public          postgres    false    220            O           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public          postgres    false    226            /   D   x�3估��֋6]�wa+��M�.�
��� n7XE��]6p�p^�{aP`HՅ]\1z\\\ ��(c      1   H  x�]��J�@�ϳO�H�$�M<{<h�ن4��Ҧ����AA�7�7(J�Vھ��9Z�fY����|>�;���,p	:�UC 9�s ������y�o��s�ð�z����3�e�ܤ�)�O�u[r�~����+��p-��nZU�ۼ�p�yR�i��r[,|�-�Q�)��󐂾h�E�����(OR�f���V���,����8�����G�_�wM�ّ��=5�`�����l['{rpc�fbM��H�4�{RF�#�q�JEm�-}�H�a1�靓�ݟb���Y#)���X�w�%�[��6c�WB�M      9      x������ � �      7   =   x�2 ��1	На месте, при получении
\.


v      3   &   x�3�LL����2���,I�H��2�,-N-����� �&      5   W   x���� E��LT`��1�pI+�bH��{9qyO�(��PP�u$g}"��#�,hxl�3�C7x��@FEa�Ep�{C�uP�04      ;   8  x�mλr�@ @�z���n��c�EA�#c�@]�`��Ϥ�S��\�,*L(�x��`�}���(.3�*�ޤSm��A"���˕����3?�/�j0 ��!bC�� u���P�8��PR�(V�Ε8u�g���Ƕ���*���m*����y;�ޗS%T��
��}��]�k��$�)E��I2!q��L0�ܲ�������,�����nԍe��L���b��u�](����GJ�C� ��0UL�,?'CMQ~M��9�m��H�Z��ލHk��ܒ�z����㉃�a������i%I���x     