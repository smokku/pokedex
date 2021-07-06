import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameStddevPopFieldsModelBase } from "./PokemonV2MovelearnmethodnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameStddevPopFieldsModel */
export interface PokemonV2MovelearnmethodnameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameStddevPopFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameStddevPopFields, pokemonV2MovelearnmethodnameStddevPopFieldsModelPrimitives, PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovelearnmethodnameStddevPopFieldsModel = PokemonV2MovelearnmethodnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
