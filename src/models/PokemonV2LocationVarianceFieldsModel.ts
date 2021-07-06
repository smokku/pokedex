import { Instance } from "mobx-state-tree"
import { PokemonV2LocationVarianceFieldsModelBase } from "./PokemonV2LocationVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationVarianceFieldsModel */
export interface PokemonV2LocationVarianceFieldsModelType extends Instance<typeof PokemonV2LocationVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationVarianceFieldsModel */
export { selectFromPokemonV2LocationVarianceFields, pokemonV2LocationVarianceFieldsModelPrimitives, PokemonV2LocationVarianceFieldsModelSelector } from "./PokemonV2LocationVarianceFieldsModel.base"

/**
 * PokemonV2LocationVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationVarianceFieldsModel = PokemonV2LocationVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
