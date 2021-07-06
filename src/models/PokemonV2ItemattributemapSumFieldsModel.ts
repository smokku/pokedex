import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapSumFieldsModelBase } from "./PokemonV2ItemattributemapSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapSumFieldsModel */
export interface PokemonV2ItemattributemapSumFieldsModelType extends Instance<typeof PokemonV2ItemattributemapSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapSumFieldsModel */
export { selectFromPokemonV2ItemattributemapSumFields, pokemonV2ItemattributemapSumFieldsModelPrimitives, PokemonV2ItemattributemapSumFieldsModelSelector } from "./PokemonV2ItemattributemapSumFieldsModel.base"

/**
 * PokemonV2ItemattributemapSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributemapSumFieldsModel = PokemonV2ItemattributemapSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
