import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameVarianceFieldsModelBase } from "./PokemonV2ItemattributenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameVarianceFieldsModel */
export interface PokemonV2ItemattributenameVarianceFieldsModelType extends Instance<typeof PokemonV2ItemattributenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameVarianceFieldsModel */
export { selectFromPokemonV2ItemattributenameVarianceFields, pokemonV2ItemattributenameVarianceFieldsModelPrimitives, PokemonV2ItemattributenameVarianceFieldsModelSelector } from "./PokemonV2ItemattributenameVarianceFieldsModel.base"

/**
 * PokemonV2ItemattributenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributenameVarianceFieldsModel = PokemonV2ItemattributenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
