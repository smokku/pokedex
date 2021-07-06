import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionMaxFieldsModelBase } from "./PokemonV2GrowthratedescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionMaxFieldsModel */
export interface PokemonV2GrowthratedescriptionMaxFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionMaxFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionMaxFields, pokemonV2GrowthratedescriptionMaxFieldsModelPrimitives, PokemonV2GrowthratedescriptionMaxFieldsModelSelector } from "./PokemonV2GrowthratedescriptionMaxFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2GrowthratedescriptionMaxFieldsModel = PokemonV2GrowthratedescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
