/*expected
initial->s1_1->s1_2->s1_3->s1_4;
s1_1->s1_3;
s1_2->s1_4;
s1_1->s1_4->final;
*/
(a &&= b) ?? c;

/*DOT
digraph {
    node[shape=box,style="rounded,filled",fillcolor=white];
    initial[label="",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];
    final[label="",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];
    s1_1[label="Program:enter\nExpressionStatement:enter\nLogicalExpression:enter\nAssignmentExpression:enter\nIdentifier (a)"];
    s1_2[label="Identifier (b)\nAssignmentExpression:exit"];
    s1_3[label="Identifier (c)"];
    s1_4[label="LogicalExpression:exit\nExpressionStatement:exit\nProgram:exit"];
    initial->s1_1->s1_2->s1_3->s1_4;
    s1_1->s1_3;
    s1_2->s1_4;
    s1_1->s1_4->final;
}
*/
