<samp>

Binary searching algorithms traverse a data structure in an unique way. The goal is to find an element in the data structure and be able to tell whether it is in there or not in an efficient way.

Instead of traversing the entire structure, one element at a time as linear searching algorithms do, the **divide and conquer** way takes place. Dividing the data structure in two and looking at one of them, over and over again.

To halve the data structure in two parts, we need to set a **low** and **high** index on our data structure first. The low index defines the "beginning" of the halving, so you never halve the data structure from that point backwards, the high index defines the "end" of the halving, so you never halve it from that point onwards.
<br>
So at first, the beginning of a data structure is really where it begins, if you can tell where that is, you have the **low** index already. Usually it will be `0` since most programming languages start counting positions from zero. The end of a data structure is really where it ends, the last element on that data structure.

Finding the **middle** is the trickiest part on these types of algorithms because you need to have a middle point in order to half your data structure in two and look at one of them two parts. The middle will always be **the sum of the low index and the high index divided by two** so that way, even if we already halved our initial data structure in two we can keep tracking the middle of one of them two.
<br>
It is important to round the middle to the nearest integer so you don't end up getting a decimal value, since positions in a data structure are always integers.

```typescript
function binarySearch(arr: number[] element: number): boolean {
	let lo = 0;
	let hi = haystack.length;

	const mid = Math.floor((lo + hi) / 2);
}
```

Now we can start making comparisons in order to achieve our element. The first comparison we want to do is the best case scenario for this type of algorithm: **the element is the middle point**. If that's the case, we immediately `return true` since we've already found our element in the first attempt to divide our data structure.

But that is the luckiest scenario, and we'll often not get that. So, we make another comparison: **if the element we're looking for is greater than the middle point, then every element after the middle one will be greater than our element**, meaning that we can discard all of them and look only for elements in the data structure that comes before the middle element.
<br>
The same happens **if the element we're looking for is less than the middle point, that means every element that comes before it will be less than our element too**, meaning we can discard them all as well and look only for elements that comes after the middle point. **But we must exclude the middle point in this case, because we our low index to be elements that come after it, not including it.**

And we keep doing this over and over again until **the low becomes the high** which means we've got only a single element left in the data structure and we can finally tell whether the element is in there or not.

```typescript
function binarySearch(arr: number[] element: number): boolean {
	let lo = 0;
	let hi = haystack.length;

	const mid = Math.floor((lo + hi) / 2);

	do {
		if (arr[mid] === element) {
			return true;
		} else if (arr[mid] > element) {
			hi = arr[mid];
		} else {
			lo = arr[mid] + 1;
		}
	} while (lo < hi);

	return false;
}
```

</samp>
