import { Instance } from "mobx-state-tree"
import { PokemonV2NatureVarianceFieldsModelBase } from "./PokemonV2NatureVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureVarianceFieldsModel */
export interface PokemonV2NatureVarianceFieldsModelType extends Instance<typeof PokemonV2NatureVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureVarianceFieldsModel */
export { selectFromPokemonV2NatureVarianceFields, pokemonV2NatureVarianceFieldsModelPrimitives, PokemonV2NatureVarianceFieldsModelSelector } from "./PokemonV2NatureVarianceFieldsModel.base"

/**
 * PokemonV2NatureVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2NatureVarianceFieldsModel = PokemonV2NatureVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
