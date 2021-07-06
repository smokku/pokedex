import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameModelBase } from "./PokemonV2ItemcategorynameModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameModel */
export interface PokemonV2ItemcategorynameModelType extends Instance<typeof PokemonV2ItemcategorynameModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameModel */
export { selectFromPokemonV2Itemcategoryname, pokemonV2ItemcategorynameModelPrimitives, PokemonV2ItemcategorynameModelSelector } from "./PokemonV2ItemcategorynameModel.base"

/**
 * PokemonV2ItemcategorynameModel
 *
 * columns and relationships of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameModel = PokemonV2ItemcategorynameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
