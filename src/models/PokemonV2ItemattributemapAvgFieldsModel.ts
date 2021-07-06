import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapAvgFieldsModelBase } from "./PokemonV2ItemattributemapAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapAvgFieldsModel */
export interface PokemonV2ItemattributemapAvgFieldsModelType extends Instance<typeof PokemonV2ItemattributemapAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapAvgFieldsModel */
export { selectFromPokemonV2ItemattributemapAvgFields, pokemonV2ItemattributemapAvgFieldsModelPrimitives, PokemonV2ItemattributemapAvgFieldsModelSelector } from "./PokemonV2ItemattributemapAvgFieldsModel.base"

/**
 * PokemonV2ItemattributemapAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemattributemapAvgFieldsModel = PokemonV2ItemattributemapAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
