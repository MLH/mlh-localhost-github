#include<stdio.h>
#include<conio.h>
#define stack_size 10
int top=-1;
int s[stack_size];

void push()
{
	int item=0;
	clrscr();
	if(top==stack_size-1)
	{
		printf("Overflow\n");
	}
	else
	{
		do
		{
			printf("Enter element:");
			scanf("%d",&item);
		}while(item==0);
		top++;
		s[top]=item;
		return;
	}
}
void pop()
{
	if(top==-1)
	{
	       printf("Underflow\n");
	       return;
	}
	printf("Element deleted:%d\n",s[top]);
	top--;
}
void display()
{
	int i;
	if(top==-1)
	{
		printf("Empty\n");
		return;
	}
	printf("Elements:\n");
	for(i=0;i<=top;i++)
	{
		printf("%d\n",s[i]);
	}

}
void main()
{
	int choice;
	clrscr();


	for(;;)
	{
		printf("1.Push\n2.Pop\n3.Display\n4.Exit\n");
		printf("Enter choice:");
		scanf("%d",&choice);
		switch(choice)
		{

			case 1:
				push();
				break;
			case 2:
				pop();

				break;
			case 3:
				display();
				break;
			case 4:
				return;


		}
	}
	getch();

}
