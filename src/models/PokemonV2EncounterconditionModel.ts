import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionModelBase } from "./PokemonV2EncounterconditionModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionModel */
export interface PokemonV2EncounterconditionModelType extends Instance<typeof PokemonV2EncounterconditionModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionModel */
export { selectFromPokemonV2Encountercondition, pokemonV2EncounterconditionModelPrimitives, PokemonV2EncounterconditionModelSelector } from "./PokemonV2EncounterconditionModel.base"

/**
 * PokemonV2EncounterconditionModel
 *
 * columns and relationships of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionModel = PokemonV2EncounterconditionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
