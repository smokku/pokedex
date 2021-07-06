import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameVarianceFieldsModelBase } from "./PokemonV2GenerationnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameVarianceFieldsModel */
export interface PokemonV2GenerationnameVarianceFieldsModelType extends Instance<typeof PokemonV2GenerationnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameVarianceFieldsModel */
export { selectFromPokemonV2GenerationnameVarianceFields, pokemonV2GenerationnameVarianceFieldsModelPrimitives, PokemonV2GenerationnameVarianceFieldsModelSelector } from "./PokemonV2GenerationnameVarianceFieldsModel.base"

/**
 * PokemonV2GenerationnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2GenerationnameVarianceFieldsModel = PokemonV2GenerationnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
