import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapVarianceFieldsModelBase } from "./PokemonV2ItemattributemapVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapVarianceFieldsModel */
export interface PokemonV2ItemattributemapVarianceFieldsModelType extends Instance<typeof PokemonV2ItemattributemapVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapVarianceFieldsModel */
export { selectFromPokemonV2ItemattributemapVarianceFields, pokemonV2ItemattributemapVarianceFieldsModelPrimitives, PokemonV2ItemattributemapVarianceFieldsModelSelector } from "./PokemonV2ItemattributemapVarianceFieldsModel.base"

/**
 * PokemonV2ItemattributemapVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributemapVarianceFieldsModel = PokemonV2ItemattributemapVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
