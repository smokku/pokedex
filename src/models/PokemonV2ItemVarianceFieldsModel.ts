import { Instance } from "mobx-state-tree"
import { PokemonV2ItemVarianceFieldsModelBase } from "./PokemonV2ItemVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemVarianceFieldsModel */
export interface PokemonV2ItemVarianceFieldsModelType extends Instance<typeof PokemonV2ItemVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemVarianceFieldsModel */
export { selectFromPokemonV2ItemVarianceFields, pokemonV2ItemVarianceFieldsModelPrimitives, PokemonV2ItemVarianceFieldsModelSelector } from "./PokemonV2ItemVarianceFieldsModel.base"

/**
 * PokemonV2ItemVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemVarianceFieldsModel = PokemonV2ItemVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
