import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameModelBase } from "./PokemonV2ItempocketnameModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameModel */
export interface PokemonV2ItempocketnameModelType extends Instance<typeof PokemonV2ItempocketnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameModel */
export { selectFromPokemonV2Itempocketname, pokemonV2ItempocketnameModelPrimitives, PokemonV2ItempocketnameModelSelector } from "./PokemonV2ItempocketnameModel.base"

/**
 * PokemonV2ItempocketnameModel
 *
 * columns and relationships of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameModel = PokemonV2ItempocketnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
