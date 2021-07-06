import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameStddevFieldsModelBase } from "./PokemonV2MovelearnmethodnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameStddevFieldsModel */
export interface PokemonV2MovelearnmethodnameStddevFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameStddevFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameStddevFields, pokemonV2MovelearnmethodnameStddevFieldsModelPrimitives, PokemonV2MovelearnmethodnameStddevFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovelearnmethodnameStddevFieldsModel = PokemonV2MovelearnmethodnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
