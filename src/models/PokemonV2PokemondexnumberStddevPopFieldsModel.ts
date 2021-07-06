import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberStddevPopFieldsModelBase } from "./PokemonV2PokemondexnumberStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberStddevPopFieldsModel */
export interface PokemonV2PokemondexnumberStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberStddevPopFieldsModel */
export { selectFromPokemonV2PokemondexnumberStddevPopFields, pokemonV2PokemondexnumberStddevPopFieldsModelPrimitives, PokemonV2PokemondexnumberStddevPopFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevPopFieldsModel.base"

/**
 * PokemonV2PokemondexnumberStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemondexnumberStddevPopFieldsModel = PokemonV2PokemondexnumberStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
