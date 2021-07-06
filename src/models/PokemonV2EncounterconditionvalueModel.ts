import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueModelBase } from "./PokemonV2EncounterconditionvalueModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueModel */
export interface PokemonV2EncounterconditionvalueModelType extends Instance<typeof PokemonV2EncounterconditionvalueModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueModel */
export { selectFromPokemonV2Encounterconditionvalue, pokemonV2EncounterconditionvalueModelPrimitives, PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"

/**
 * PokemonV2EncounterconditionvalueModel
 *
 * columns and relationships of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueModel = PokemonV2EncounterconditionvalueModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
