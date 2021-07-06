import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextVarianceFieldsModelBase } from "./PokemonV2AbilityflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextVarianceFieldsModel */
export interface PokemonV2AbilityflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextVarianceFieldsModel */
export { selectFromPokemonV2AbilityflavortextVarianceFields, pokemonV2AbilityflavortextVarianceFieldsModelPrimitives, PokemonV2AbilityflavortextVarianceFieldsModelSelector } from "./PokemonV2AbilityflavortextVarianceFieldsModel.base"

/**
 * PokemonV2AbilityflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilityflavortextVarianceFieldsModel = PokemonV2AbilityflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
