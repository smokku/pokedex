import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupStddevFieldsModelBase } from "./PokemonV2PokemonegggroupStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupStddevFieldsModel */
export interface PokemonV2PokemonegggroupStddevFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupStddevFieldsModel */
export { selectFromPokemonV2PokemonegggroupStddevFields, pokemonV2PokemonegggroupStddevFieldsModelPrimitives, PokemonV2PokemonegggroupStddevFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevFieldsModel.base"

/**
 * PokemonV2PokemonegggroupStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonegggroupStddevFieldsModel = PokemonV2PokemonegggroupStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
