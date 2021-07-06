import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeSumFieldsModelBase } from "./PokemonV2PokemonshapeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeSumFieldsModel */
export interface PokemonV2PokemonshapeSumFieldsModelType extends Instance<typeof PokemonV2PokemonshapeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeSumFieldsModel */
export { selectFromPokemonV2PokemonshapeSumFields, pokemonV2PokemonshapeSumFieldsModelPrimitives, PokemonV2PokemonshapeSumFieldsModelSelector } from "./PokemonV2PokemonshapeSumFieldsModel.base"

/**
 * PokemonV2PokemonshapeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonshapeSumFieldsModel = PokemonV2PokemonshapeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
