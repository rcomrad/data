#include <iostream>
#include <stdio.h>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
#include <set>
#include <queue>
#include <sstream>
#include <functional>
#include <cmath>
#include <fstream>
 
using namespace std;
 
//------------------------------------------------------------------
//Some commone structs
union MyPair
{
	struct
	{
		int i, j;
	};
	struct
	{
		int x, y;
	};
 
	MyPair()
	{
		i = j = 0;
	}
	MyPair(const int iInit, const int jInit)
	{
		i = iInit, j = jInit;
	}
 
	int& operator[] (const int num)
	{
		return num ? j : i;
	}
 
	void operator+= (const MyPair& n)
	{
		i += n.i;
		j += n.j;
	}
	void operator-= (const MyPair& n)
	{
		i -= n.i;
		j -= n.j;
	}
 
	MyPair operator+ (const MyPair& n) const
	{
		MyPair ret;
		ret.i = i + n.i;
		ret.j = j + n.j;
		return ret;
	}
	MyPair operator- (const MyPair& n) const
	{
		MyPair ret;
		ret.i = i - n.i;
		ret.j = j - n.j;
		return ret;
	}
 
	bool operator< (const MyPair& n) const
	{
		if (i != n.i) return i < n.i;
		return j < n.j;
	}
	bool operator>(const MyPair& n) const
	{
		if (i != n.i) return i > n.i;
		return j > n.j;
	}
	bool operator== (const MyPair& n) const
	{
		return i == n.i && j == n.j;
	}
	bool operator!= (const MyPair& n) const
	{
		return i != n.i || j != n.j;
	}
};
 
//------------------------------------------------------------------
// Typedef
#define V							vector
#define M							map
#define SE							set
#define Q							queue
 
typedef int							I;
typedef double						D;
typedef bool						B;
typedef char						C;
typedef string						S;
typedef MyPair						P;
 
typedef unsigned int				UI;
 
typedef long long					LL;
typedef unsigned long long			ULL;
 
typedef V<I>						VI;
typedef V<VI>						VVI;
typedef V<VVI>						VVVI;
 
typedef V<B>						VB;
typedef V<VB>						VVB;
typedef V<VB>						VvVB;
 
typedef V<D>						VD;
typedef V<VD>						VVD;
typedef V<VD>						VVVD;
 
typedef V<LL>						VLL;
typedef V<VLL>						VVLL;
typedef V<VVLL>						VVVLL;
 
typedef V<C>						VC;
typedef V<VC>						VVC;
typedef V<VVC>						VVVC;
 
typedef V<S>						VS;
typedef V<VS>						VVS;
 
typedef V<P>						VP;
typedef V<VP>						VVP;
//------------------------------------------------------------------
// Constants
#define PI							(D		  ( 3.141592653 ) )
#define BIG							(I		  ( 10e8		) )
#define VERYBIG						(LL		  ( 10e17	    ) )
#define E							(double   ( 2.718281828 ) )
 
//------------------------------------------------------------------
// Some commone functions
#define ALL(a)						(a).begin(),(a).end()
#define ALLr(a)						(a).rbegin(),(a).rend()
 
#define SORT(a)						sort(ALL(a))
#define SORTr(a)					sort(ALLr(a))
 
#define REV(a)						reverse(ALL(a));
 
#define DIST(a, to)					distance(a.begin(), to)
#define DISTF(a, from)				distance(from, a.end())
 
#define MIN(a,b)					if (a > b) swap(a, b)
#define MAX(a,b)					if (a < b) swap(a, b)
 
#define Fa(a, obj)					for(	  auto& a : obj)
#define Fca(a, obj)					for(const auto& a : obj)
 
#define F(a, to)					for(I a = 0		; a < (to) ; ++a)
#define FOR(a, from, to)			for(I a = (from); a < (to) ; ++a)
#define Fr(a, from)				    for(I a = (from); a >= 0   ; --a)
#define FORr(a, from, to)			for(I a = (from); a >= (to); --a)
 
#ifndef ONLINE_JUDGE 
#define FILES(name1, name2)												\
		freopen(# name1 ".in", "r", stdin);								\
		freopen(# name1 ".out", "w", stdout);
#else
#define FILES(name1, name2)												\
		freopen(# name2 ".in", "r", stdin);								\
		freopen(# name2 ".out", "w", stdout);
#endif 	
 
#ifndef ONLINE_JUDGE 
#define FILESmco(name)													\
		freopen(# name ".in", "r", stdin);								\
		freopen(# name ".out", "w", stdout);
#else
#define FILESmco(name)
#endif 		
 
#define COUT_ANSWER(a)													\
{																		\
	cout << a << "\n";													\
	exit(0);															\
}
//------------------------------------------------------------------
 
#include "testlib.h"
 
#define EPS (1E-4)
 
void cut(string &s){
	int n = 0;
	while (s[n] != '.') ++n;
	s.resize(n + 5);
}
 
int main(int argc, char * argv[])
{
	setName("compare answers");
	registerTestlibCmd(argc, argv);
 
	string jaStr = ans.readString();
	string paStr = ouf.readString();
	if (jaStr != paStr)
		quitf(_wa, "expected %s, found %s", jaStr, paStr);
 
	vector<double> ja;
	while (!ans.seekEof()){
		ja.push_back(ans.readDouble());
	}
	vector<double> pa;
	while (!ouf.seekEof()){
		pa.push_back(ouf.readDouble());
	}
 
	if (ja.size() != pa.size())
		quitf(_wa, "expected %d roots, found %d roots", ja.size(), pa.size());
	
	if (ja.size() > 1 && abs(ja[0] - pa[0]) > EPS) swap(pa[0], pa[1]);
 
	for (int i = 0; i < ja.size(); ++i)
	{
		if (!doubleCompare(ja[i], pa[i], EPS))
			quitf(_wa, "numbers differ - expected: '%.5lf', found: '%.5lf', error = '%.5lf'", ja[i], pa[i], doubleDelta(ja[i], pa[i]));
	}
 
	quitf(_ok, "answer correct");
}
