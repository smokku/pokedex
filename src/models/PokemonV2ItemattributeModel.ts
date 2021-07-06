import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeModelBase } from "./PokemonV2ItemattributeModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeModel */
export interface PokemonV2ItemattributeModelType extends Instance<typeof PokemonV2ItemattributeModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeModel */
export { selectFromPokemonV2Itemattribute, pokemonV2ItemattributeModelPrimitives, PokemonV2ItemattributeModelSelector } from "./PokemonV2ItemattributeModel.base"

/**
 * PokemonV2ItemattributeModel
 *
 * columns and relationships of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeModel = PokemonV2ItemattributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
