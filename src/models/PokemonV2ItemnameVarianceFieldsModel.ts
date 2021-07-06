import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameVarianceFieldsModelBase } from "./PokemonV2ItemnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameVarianceFieldsModel */
export interface PokemonV2ItemnameVarianceFieldsModelType extends Instance<typeof PokemonV2ItemnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameVarianceFieldsModel */
export { selectFromPokemonV2ItemnameVarianceFields, pokemonV2ItemnameVarianceFieldsModelPrimitives, PokemonV2ItemnameVarianceFieldsModelSelector } from "./PokemonV2ItemnameVarianceFieldsModel.base"

/**
 * PokemonV2ItemnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemnameVarianceFieldsModel = PokemonV2ItemnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
