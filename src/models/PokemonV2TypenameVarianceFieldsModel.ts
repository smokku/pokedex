import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameVarianceFieldsModelBase } from "./PokemonV2TypenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameVarianceFieldsModel */
export interface PokemonV2TypenameVarianceFieldsModelType extends Instance<typeof PokemonV2TypenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameVarianceFieldsModel */
export { selectFromPokemonV2TypenameVarianceFields, pokemonV2TypenameVarianceFieldsModelPrimitives, PokemonV2TypenameVarianceFieldsModelSelector } from "./PokemonV2TypenameVarianceFieldsModel.base"

/**
 * PokemonV2TypenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2TypenameVarianceFieldsModel = PokemonV2TypenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
