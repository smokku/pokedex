import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameVarianceFieldsModelBase } from "./PokemonV2LocationnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameVarianceFieldsModel */
export interface PokemonV2LocationnameVarianceFieldsModelType extends Instance<typeof PokemonV2LocationnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameVarianceFieldsModel */
export { selectFromPokemonV2LocationnameVarianceFields, pokemonV2LocationnameVarianceFieldsModelPrimitives, PokemonV2LocationnameVarianceFieldsModelSelector } from "./PokemonV2LocationnameVarianceFieldsModel.base"

/**
 * PokemonV2LocationnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationnameVarianceFieldsModel = PokemonV2LocationnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
