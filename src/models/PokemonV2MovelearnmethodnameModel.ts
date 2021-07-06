import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameModelBase } from "./PokemonV2MovelearnmethodnameModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameModel */
export interface PokemonV2MovelearnmethodnameModelType extends Instance<typeof PokemonV2MovelearnmethodnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameModel */
export { selectFromPokemonV2Movelearnmethodname, pokemonV2MovelearnmethodnameModelPrimitives, PokemonV2MovelearnmethodnameModelSelector } from "./PokemonV2MovelearnmethodnameModel.base"

/**
 * PokemonV2MovelearnmethodnameModel
 *
 * columns and relationships of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameModel = PokemonV2MovelearnmethodnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
