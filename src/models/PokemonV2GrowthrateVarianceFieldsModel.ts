import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateVarianceFieldsModelBase } from "./PokemonV2GrowthrateVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateVarianceFieldsModel */
export interface PokemonV2GrowthrateVarianceFieldsModelType extends Instance<typeof PokemonV2GrowthrateVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateVarianceFieldsModel */
export { selectFromPokemonV2GrowthrateVarianceFields, pokemonV2GrowthrateVarianceFieldsModelPrimitives, PokemonV2GrowthrateVarianceFieldsModelSelector } from "./PokemonV2GrowthrateVarianceFieldsModel.base"

/**
 * PokemonV2GrowthrateVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2GrowthrateVarianceFieldsModel = PokemonV2GrowthrateVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
