import { Instance } from "mobx-state-tree"
import { PokemonV2GenderVarianceFieldsModelBase } from "./PokemonV2GenderVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderVarianceFieldsModel */
export interface PokemonV2GenderVarianceFieldsModelType extends Instance<typeof PokemonV2GenderVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderVarianceFieldsModel */
export { selectFromPokemonV2GenderVarianceFields, pokemonV2GenderVarianceFieldsModelPrimitives, PokemonV2GenderVarianceFieldsModelSelector } from "./PokemonV2GenderVarianceFieldsModel.base"

/**
 * PokemonV2GenderVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2GenderVarianceFieldsModel = PokemonV2GenderVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
