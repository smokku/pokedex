import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberStddevFieldsModelBase } from "./PokemonV2PokemondexnumberStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberStddevFieldsModel */
export interface PokemonV2PokemondexnumberStddevFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberStddevFieldsModel */
export { selectFromPokemonV2PokemondexnumberStddevFields, pokemonV2PokemondexnumberStddevFieldsModelPrimitives, PokemonV2PokemondexnumberStddevFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevFieldsModel.base"

/**
 * PokemonV2PokemondexnumberStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemondexnumberStddevFieldsModel = PokemonV2PokemondexnumberStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
