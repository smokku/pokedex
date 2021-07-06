import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateMaxFieldsModelBase } from "./PokemonV2GrowthrateMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateMaxFieldsModel */
export interface PokemonV2GrowthrateMaxFieldsModelType extends Instance<typeof PokemonV2GrowthrateMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateMaxFieldsModel */
export { selectFromPokemonV2GrowthrateMaxFields, pokemonV2GrowthrateMaxFieldsModelPrimitives, PokemonV2GrowthrateMaxFieldsModelSelector } from "./PokemonV2GrowthrateMaxFieldsModel.base"

/**
 * PokemonV2GrowthrateMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2GrowthrateMaxFieldsModel = PokemonV2GrowthrateMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
